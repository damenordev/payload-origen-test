import { CollectionAfterChangeHook, CollectionBeforeChangeHook, CollectionConfig, DateField, Field } from 'payload'
import { MetaDescriptionField, MetaImageField, MetaTitleField, OverviewField, PreviewField } from '@payloadcms/plugin-seo/fields'
import { Page } from '@/payload-types'
import { revalidatePath, revalidateTag } from 'next/cache'
import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

export const revalidatePage: CollectionAfterChangeHook<Page> = ({ doc, previousDoc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = doc.slug === 'home' ? '/' : `/${doc.slug}`
      payload.logger.info(`Revalidating page at path: ${path}`)
      revalidatePath(path)
      revalidateTag('pages-sitemap')
    }

    // If the page was previously published, we need to revalidate the old path
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = previousDoc.slug === 'home' ? '/' : `/${previousDoc.slug}`
      payload.logger.info(`Revalidating old page at path: ${oldPath}`)
      revalidatePath(oldPath)
      revalidateTag('pages-sitemap')
    }
  }
  return doc
}

export const populatePublishedAt: CollectionBeforeChangeHook = ({ data, operation, req }) => {
  if (operation === 'create' || operation === 'update') {
    if (req.data && !req.data.publishedAt) return { ...data, publishedAt: new Date() }
  }
  return data
}

interface IFieldDatetimeArgs extends Omit<DateField, 'type'> {}

const fieldDatetime = ({ name, ...args }: IFieldDatetimeArgs): Field => ({
  admin: {
    ...args.admin,
    date: { displayFormat: 'DD/MM/YYYY - HH:mm', pickerAppearance: 'dayAndTime', ...args.admin?.date },
  },
  ...args,
  name,
  type: 'date',
})

export const PageCollection: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'title', label: 'Título de la página', type: 'text', required: true },
        { name: 'slug', label: 'Slug', type: 'text', required: true },
      ],
    },
    {
      name: 'layout',
      type: 'select',
      label: 'Tipo de página',
      options: [{ label: 'Contenido con formulario', value: 'content-form' }],
      defaultValue: 'content-form',
    },
    {
      name: 'formType',
      type: 'select',
      label: 'Tipo de formulario',
      defaultValue: 'appointment',
      options: [
        { label: 'Pedir cita', value: 'appointment' },
        { label: 'Contactar', value: 'contact' },
      ],
      admin: {
        condition: (_, siblingData) => siblingData.layout === 'banner-form' || siblingData.layout === 'slider-form',
      },
    },
    { name: 'heroTitle', type: 'text', label: 'Título del hero', required: true },
    { name: 'heroImage', type: 'upload', label: 'Imagen del hero', relationTo: 'media', required: true },
    {
      type: 'collapsible',
      label: 'Contenido',
      fields: [
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [...rootFeatures, HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }), FixedToolbarFeature(), InlineToolbarFeature()]
            },
            admin: {
              hideGutter: true,
              placeholder: 'Añade contenido a la página',
            },
          }),
          label: false,
        },
      ],
    },
    {
      type: 'tabs',
      admin: {
        position: 'sidebar',
      },
      tabs: [
        {
          label: 'Configuración',
          fields: [
            {
              name: 'headerVisible',
              label: 'Mostrar cabecera',
              type: 'checkbox',
              defaultValue: true,
              admin: { width: 'fit-content' },
            },
            {
              name: 'footerVisible',
              label: 'Mostrar pie de página',
              type: 'checkbox',
              defaultValue: true,
              admin: { width: 'fit-content' },
            },
            {
              type: 'row',
              fields: [
                fieldDatetime({ name: 'startPublishDate', label: 'Fecha de inicio de publicación', defaultValue: new Date(), required: true }),
                fieldDatetime({ name: 'endPublishDate', label: 'Fecha de fin de publicación (opcional)' }),
              ],
            },
            {
              name: 'redirectToUrl',
              type: 'relationship',
              label: 'Redirigir a página cuando no esté publicada',
              relationTo: 'pages',
              required: true,
              admin: {
                condition: (_, siblingData) => siblingData.endPublishDate || new Date(siblingData.startPublishDate) > new Date(),
              },
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            // OverviewField({
            //   titlePath: 'meta.title',
            //   descriptionPath: 'meta.description',
            //   imagePath: 'meta.image',
            // }),
            // MetaTitleField({ hasGenerateFn: true }),
            // MetaImageField({ relationTo: 'media' }),
            // MetaDescriptionField({}),
            // PreviewField({
            //   hasGenerateFn: true,
            //   titlePath: 'meta.title',
            //   descriptionPath: 'meta.description',
            // }),
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    // afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
}
