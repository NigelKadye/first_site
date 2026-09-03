import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import CategoryOverview from '../src/components/CategoryOverview'
import Layout from '../src/components/Layout'
import SectionPager from '../src/components/SectionPager'
import GinBot from '../src/components/GinBot'
import { allPageSlugs, getGroupBySlug, getSectionBySlug, getSectionSiblings } from '../src/siteConfig'

const sectionComponents = {
  'southern-africa': dynamic(() => import('../src/components/sections/SouthernAfrica')),
  europe: dynamic(() => import('../src/components/sections/UnitedKingdom')),
  usa: dynamic(() => import('../src/components/sections/UnitedStates')),
  americas: dynamic(() => import('../src/components/sections/Americas')),
  asia: dynamic(() => import('../src/components/sections/Asia')),
  botanicals: dynamic(() => import('../src/components/sections/Botanicals')),
  mixers: dynamic(() => import('../src/components/sections/Mixers')),
  'spirit-coolers': dynamic(() => import('../src/components/sections/SpiritCoolers')),
  budget: dynamic(() => import('../src/components/sections/Budget')),
  'first-dates': dynamic(() => import('../src/components/sections/FirstDates')),
  'craft-gin': dynamic(() => import('../src/components/sections/CraftGin')),
  serving: dynamic(() => import('../src/components/sections/Serving')),
  pairings: dynamic(() => import('../src/components/sections/Pairings')),
  'quick-fixes': dynamic(() => import('../src/components/sections/QuickFixes')),
}

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
        <Layout activeGroupSlug={group.slug} activePageSlug={group.slug}>
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

  const ActiveSection = sectionComponents[slug]
  const parentGroup = getGroupBySlug(section.groupSlug)
  const { previousItem, nextItem } = getSectionSiblings(slug)
  const pageTitle = `${section.label} · Kadye & Gin`

  return (
    <>
      <Head>
        <title key="title">{pageTitle}</title>
        <meta key="description" name="description" content={section.description} />
      </Head>
      <Layout activeGroupSlug={section.groupSlug} activePageSlug={slug}>
        <div className="content-stage">
          {ActiveSection ? (
            <ActiveSection
              onNavigate={(sectionId) => {
                router.push(sectionId === 'home' ? '/' : `/${sectionId}`)
              }}
            />
          ) : null}
        </div>
        {parentGroup ? <SectionPager group={parentGroup} previousItem={previousItem} nextItem={nextItem} /> : null}
        <GinBot />
      </Layout>
    </>
  )
}
