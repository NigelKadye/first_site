import BrandLogo from './BrandLogo'

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-width header-inner">
        <div className="brand-mark">
          <BrandLogo />
        </div>
        <p className="header-kicker">Breathing Gin Since 2023</p>
        <h1 className="site-title">African. Europe. Americas</h1>
        <p className="site-subtitle">
          Curated bottles, botanicals, mixers, serving rituals, and practical pairing advice.
        </p>
      </div>
    </header>
  )
}
