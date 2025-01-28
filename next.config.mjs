import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aj4ua9kovy.ufs.sh',
      },
    ],
  },
}

export default withPayload(nextConfig)
