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

interface ILinkFieldOptions<T> {
  appearance?: T extends string[] ? T : never
  disabled?: boolean
  isExternal?: boolean
}

function linkField<T>(name: string, { appearance, disabled, isExternal }: ILinkFieldOptions<T>): Field {
  return {
    name,
    type: 'array',
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'disabled',
            type: 'checkbox',
            label: 'Deshabilitado',
            defaultValue: disabled,
            admin: { width: 'fit-content' },
          },
          {
            name: 'isExternal',
            type: 'checkbox',
            label: 'Es una URL externa',
            defaultValue: isExternal,
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
            name: 'externalLink',
            type: 'text',
            label: 'Dirección URL',
            required: true,
            admin: {
              condition: (_, siblingData) => siblingData.isExternal,
            },
          },
          {
            name: 'link',
            type: 'text',
            label: 'Dirección URL (page)',
            required: true,
            admin: {
              condition: (_, siblingData) => !siblingData.isExternal,
            },
          },
          {
            name: 'appearance',
            type: 'select',
            label: 'Apariencia',
            defaultValue: 'dropdown',
            options: appearance || [],
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
                    name: 'disabled',
                    type: 'checkbox',
                    label: 'Deshabilitado',
                    defaultValue: disabled,
                    admin: { width: 'fit-content' },
                  },
                  {
                    name: 'isExternal',
                    type: 'checkbox',
                    label: 'Es una URL externa',
                    defaultValue: isExternal,
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
                    name: 'externalLink',
                    type: 'text',
                    label: 'Dirección URL',
                    required: true,
                    admin: {
                      condition: (_, siblingData) => siblingData.isExternal,
                    },
                  },
                  {
                    name: 'link',
                    type: 'text',
                    label: 'Dirección URL (page)',
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
  }
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
    linkField('navItems', { appearance: ['single', 'dropdown', 'navigation'] }),
    navAction,
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
