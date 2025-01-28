import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { uploadthingStorage } from '@payloadcms/storage-uploadthing'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { Page } from '@/payload-types'

import { getServerSideURL } from './utils'

import { MediaCollection, PageCollection, UserCollection } from './admin/collections'
import { HeaderGlobal } from './admin/globals'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const generateTitle: GenerateTitle<Page> = ({ doc }) => (doc?.title ? `${doc.title} | Clinicas Origen` : 'Clinicas Origen')

const generateURL: GenerateURL<Page> = ({ doc }) => {
  const url = getServerSideURL()
  return doc?.slug ? `${url}/${doc.slug}` : url
}

export default buildConfig({
  admin: {
    user: UserCollection.slug,
    importMap: { baseDir: path.resolve(dirname) },
  },
  collections: [PageCollection, MediaCollection, UserCollection],
  globals: [HeaderGlobal],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db: vercelPostgresAdapter({ pool: { connectionString: process.env.DATABASE_URI || '' } }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    seoPlugin({ generateTitle, generateURL }),
    uploadthingStorage({
      collections: { media: true },
      options: {
        token: process.env.UPLOADTHING_TOKEN,
        acl: 'public-read',
      },
    }),
  ],
})
