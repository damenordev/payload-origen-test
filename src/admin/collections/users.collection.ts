import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    listSearchableFields: ['email', 'name', 'firstName'],
    defaultColumns: ['email', 'name', 'firstName', 'role'],
  },
  auth: {
    tokenExpiration: 365 * 24 * 60 * 60, // 1 year in seconds
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Administrador', value: 'admin' },
        { label: 'Mantenedor', value: 'maintainer' },
        { label: 'Editor', value: 'editor' },
      ],
      defaultValue: 'editor',
      required: true,
    },
  ],
}
