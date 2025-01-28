import { getPayload } from 'payload'
import configPromise from '@payload-config'

import { queryPageBySlug } from '@/admin/queries'
import { Footer, FormScheduleAppointment, HeroSimpleBlock } from '@/components'
import RichText from '@/ui/RichText'

interface IContainerWithStickyFormProps {
  children: React.ReactNode
}

const ContainerWithStickyForm = ({ children }: IContainerWithStickyFormProps) => {
  return (
    <div className="container mx-auto max-w-screen-xl grid md:grid-cols-[1fr_360px] md:gap-8 py-20 px-6 lg:px-0">
      {children}
      <aside className="md:sticky md:top-28 h-fit">
        <FormScheduleAppointment />
      </aside>
    </div>
  )
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: { slug: true },
  })

  return pages.docs?.filter(doc => doc.slug !== 'home').map(({ slug }) => ({ slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = await queryPageBySlug({ slug })

  return (
    <main>
      <HeroSimpleBlock
        imgUrl={page?.heroImage?.url || ''}
        title={page?.heroTitle || ''}
      />
      {page?.content && (
        <ContainerWithStickyForm>
          <RichText data={page?.content} />
        </ContainerWithStickyForm>
      )}
      <Footer />
    </main>
  )
}
