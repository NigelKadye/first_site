import Head from 'next/head'
import App from '../src/App'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Kadye & Gin · Southern African & UK Gin Guide</title>
        <meta
          name="description"
          content="Curated bottles, botanicals, mixers, serving rituals, and practical pairing advice."
        />
      </Head>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <App />
    </>
  )
}
