import { revalidateTag } from 'next/cache'
import { Field, GlobalAfterChangeHook, GlobalConfig } from 'payload'

const navAction: Field = {
  name: 'navActions',
  type: 'array',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
          admin: {
            width: 'fit-content',
          },
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Apariencia',
          defaultValue: 'primary',
          admin: {
            width: '50%',
          },
          options: [
            {
              value: 'primary',
              label: 'Color primario',
            },
            {
              value: 'secondary',
              label: 'Color secundario',
            },
            {
              value: 'outline',
              label: 'Outline',
            },
            {
              value: 'ghost',
              label: 'Ghost',
            },
            {
              value: 'link',
              label: 'Enlace',
            },
          ],
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'link',
          type: 'text',
          label: 'Dirección URL',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'isExternal',
          type: 'checkbox',
          label: 'Es una URL externa',
          defaultValue: false,
          admin: {
            width: '50%',
          },
        },
      ],
    },
  ],
}

export const revalidateHeader: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating header`)
    revalidateTag('global_app-header')
  }
  return doc
}

export const HeaderGlobal: GlobalConfig = {
  slug: 'app-header',
  label: 'Header',
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'navLinks',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'disabled',
              type: 'checkbox',
              label: 'Deshabilitado',
              admin: { width: 'fit-content' },
            },
            {
              name: 'isExternal',
              type: 'checkbox',
              label: 'Es una URL externa',
              admin: { width: 'fit-content' },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Label',
              required: true,
            },
            {
              name: 'href',
              type: 'text',
              label: 'Dirección URL',
              required: true,
              admin: {
                condition: (_, siblingData) => siblingData.isExternal && siblingData.appearance === 'single',
              },
            },
            {
              name: 'page',
              type: 'relationship',
              relationTo: 'pages',
              label: 'Página',
              required: true,
              admin: {
                condition: (_, siblingData) => !siblingData.isExternal && siblingData.appearance === 'single',
              },
            },
            {
              name: 'appearance',
              type: 'select',
              label: 'Apariencia',
              defaultValue: 'dropdown',
              options: ['dropdown', 'single', 'navigation'],
              admin: { width: 'fit-content' },
            },
          ],
        },
        {
          type: 'row',
          admin: {
            condition: (_, siblingData) => siblingData.appearance !== 'single',
          },
          fields: [
            {
              name: 'childrens',
              type: 'array',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'childDisabled',
                      type: 'checkbox',
                      label: 'Deshabilitado',
                      admin: { width: 'fit-content' },
                    },
                    {
                      name: 'isExternal',
                      type: 'checkbox',
                      label: 'Es una URL externa',
                      admin: { width: 'fit-content' },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'childLabel',
                      type: 'text',
                      label: 'Label',
                      required: true,
                    },
                    {
                      name: 'childHref',
                      type: 'text',
                      label: 'Dirección URL',
                      required: true,
                      admin: {
                        condition: (_, siblingData) => siblingData.isExternal,
                      },
                    },
                    {
                      name: 'childPage',
                      type: 'relationship',
                      relationTo: 'pages',
                      label: 'Página',
                      required: true,
                      admin: {
                        condition: (_, siblingData) => !siblingData.isExternal,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    navAction,
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
