import Head from 'next/head'
import { useRouter } from 'next/router'
import CategoryOverview from '../src/components/CategoryOverview'
import GinBot from '../src/components/GinBot'
import Layout from '../src/components/Layout'
import SectionPager from '../src/components/SectionPager'
import { allPageSlugs, getGroupBySlug, getSectionBySlug, getSectionSiblings } from '../src/siteConfig'

export async function getStaticPaths() {
  return {
    paths: allPageSlugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  }
}

export default function ContentPage({ slug }) {
  const router = useRouter()
  const group = getGroupBySlug(slug)

  if (group) {
    const pageTitle = `${group.title} · Kadye & Gin`

    return (
      <>
        <Head>
          <title key="title">{pageTitle}</title>
          <meta key="description" name="description" content={group.description} />
        </Head>
        <Layout activeGroupSlug={group.slug}>
          <div className="content-stage">
            <CategoryOverview group={group} />
          </div>
          <GinBot />
        </Layout>
      </>
    )
  }

  const section = getSectionBySlug(slug)

  if (!section) {
    return null
  }

  const ActiveSection = section.component
  const parentGroup = getGroupBySlug(section.groupSlug)
  const { previousItem, nextItem } = getSectionSiblings(slug)
  const pageTitle = `${section.label} · Kadye & Gin`

  return (
    <>
      <Head>
        <title key="title">{pageTitle}</title>
        <meta key="description" name="description" content={section.description} />
      </Head>
      <Layout activeGroupSlug={section.groupSlug}>
        <div className="content-stage">
          <ActiveSection
            onNavigate={(sectionId) => {
              router.push(sectionId === 'home' ? '/' : `/${sectionId}`)
            }}
          />
        </div>
        {parentGroup ? <SectionPager group={parentGroup} previousItem={previousItem} nextItem={nextItem} /> : null}
        <GinBot />
      </Layout>
    </>
  )
}
