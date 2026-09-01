import { Leaf, Martini } from 'lucide-react'

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-width header-inner">
        <p className="brand-mark">
          <Martini size={18} aria-hidden="true" />
          KADYE & GIN
          <Leaf size={18} aria-hidden="true" />
        </p>
        <p className="header-kicker">Breathing Gin Since 2023</p>
        <h1 className="site-title">Southern African, UK & American Gin Guide</h1>
        <p className="site-subtitle">
          Curated bottles, botanicals, mixers, serving rituals, and practical pairing advice.
        </p>
      </div>
    </header>
  )
}
