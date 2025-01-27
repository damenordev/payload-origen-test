import { CollectionAfterChangeHook, CollectionBeforeChangeHook, CollectionConfig } from 'payload'
import { MetaDescriptionField, MetaImageField, MetaTitleField, OverviewField, PreviewField } from '@payloadcms/plugin-seo/fields'
import { Page } from '@/payload-types'
import { revalidatePath, revalidateTag } from 'next/cache'

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

export const PageCollection: CollectionConfig = {
  slug: 'pages',
  defaultPopulate: {
    title: true,
    slug: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'select',
      options: [
        { label: 'Predeterminado', value: 'default' },
        { label: 'Banner', value: 'banner' },
        { label: 'Banner con formulario', value: 'banner-form' },
        { label: 'Slider y formulario', value: 'slider-form' },
      ],
      defaultValue: 'default',
    },
    {
      type: 'tabs',
      admin: {
        condition: (_, siblingData) => siblingData.layout === 'banner' || siblingData.layout === 'banner-form',
      },
      tabs: [
        {
          label: 'Banner principal',
          fields: [
            {
              name: 'showBanner',
              label: 'Mostrar banner',
              type: 'checkbox',
              defaultValue: true,
            },
            {
              name: 'bannerTitle',
              type: 'text',
              label: 'Título',
              required: true,
            },
            {
              name: 'bannerDescription',
              type: 'textarea',
              label: 'Descripción',
              required: true,
            },
          ],
        },
        {
          label: 'Contenido',
          fields: [],
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
        {
          label: 'Configuración',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'headerVisible',
                  type: 'checkbox',
                  defaultValue: true,
                  admin: { width: 'fit-content' },
                },
                {
                  name: 'footerVisible',
                  type: 'checkbox',
                  defaultValue: true,
                  admin: { width: 'fit-content' },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'startPublishDate',
                  type: 'date',
                  defaultValue: new Date(),
                  required: true,
                },
                {
                  name: 'endPublishDate',
                  type: 'date',
                },
                {
                  name: 'redirectToUrl',
                  type: 'relationship',
                  relationTo: 'pages',
                  required: true,
                  admin: {
                    condition: (_, siblingData) => siblingData.endPublishDate || siblingData.startPublishDate > new Date(),
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    // afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      // autosave: {
      //   interval: 100, // We set this interval for optimal live preview
      // },
    },
    maxPerDoc: 50,
  },
}
