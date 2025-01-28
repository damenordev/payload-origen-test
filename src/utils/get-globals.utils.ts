import type { Config } from 'src/payload-types'

import { unstable_cache } from 'next/cache'
import { getPayload } from 'payload'

import configPromise from '../payload.config'

type TGlobal = keyof Config['globals']

async function getGlobal(slug: TGlobal, depth = 0) {
  const payload = await getPayload({ config: configPromise })
  return await payload.findGlobal({ slug, depth })
}

/**
 * Returns a unstable_cache function mapped with the cache tag for the slug
 */
export const getCachedGlobal = (slug: TGlobal, depth = 0) => {
  return unstable_cache(async () => getGlobal(slug, depth), [slug], { tags: [`global_${slug}`] })
}
