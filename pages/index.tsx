import Head from 'next/head'
import Home from '../src/components/Home'
import Layout from '../src/components/Layout'
import GinBot from '../src/components/GinBot'
import { homeItems } from '../src/siteConfig'

export default function HomePage() {
  const pageTitle = 'Kadye & Gin · Southern African & UK Gin Guide'

  return (
    <>
      <Head>
        <title key="title">{pageTitle}</title>
        <meta
          key="description"
          name="description"
          content="Curated bottles, botanicals, mixers, serving rituals, and practical pairing advice."
        />
      </Head>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Layout>
        <div className="content-stage">
          <Home items={homeItems} />
        </div>
        <GinBot />
      </Layout>
    </>
  )
}
