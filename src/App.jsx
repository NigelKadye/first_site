import { useMemo, useState } from 'react'
import {
  Crown,
  Earth,
  Globe,
  Heart,
  Leaf,
  Martini,
  Menu,
  Sparkles,
  Snowflake,
  Star,
  Wallet,
  Waves,
  X,
} from 'lucide-react'
import legacySections from './content-sections.html?raw'

const navItems = [
  { id: 'southern-africa', label: 'Southern Africa', icon: Earth },
  { id: 'uk', label: 'United Kingdom', icon: Crown },
  { id: 'usa', label: 'United States', icon: Star },
  { id: 'americas', label: 'Southern America & Mexico', icon: Globe },
  { id: 'botanicals', label: 'Botanicals', icon: Leaf },
  { id: 'mixers', label: 'Mixers', icon: Waves },
  { id: 'spirit-coolers', label: 'Spirit Coolers', icon: Snowflake },
  { id: 'budget', label: 'Budget Picks', icon: Wallet },
  { id: 'first-dates', label: 'First Dates', icon: Heart },
  { id: 'serving', label: 'Serving Tips', icon: Martini },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const sectionsMarkup = useMemo(
    () =>
      legacySections
        .replace(/<i[^>]*><\/i>/g, '')
        .replace(/ onerror="[^"]*"/g, '')
        .replace(
          'https://https%3A%2F%2Fshop.thebeermerchant.co.za%2Fproducts%2Fhope-on-hopkins-mediterranean-gin-750ml%3Fsrsltid%3DAfmBOopSbjyEnUv8yfAmZ1SH0XE_Vv6LnVvVRbqY80AGikM0HzhVuILx&ved=0CBYQjRxqFwoTCPDk-qfos5UDFQAAAAAdAAAAABA3&opi=89978449w=300&h=300&fit=crop',
          'https://images.unsplash.com/photo-1510812431401-41d2cab2707c?w=300&h=300&fit=crop',
        ),
    [],
  )

  const goToSection = (id) => {
    const section = document.getElementById(id)
    if (!section) return
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <div className="app-shell">
      <header className="site-header" role="banner">
        <div className="header-container">
          <p className="brand-mark">
            <Martini size={18} aria-hidden="true" /> KADYE & GIN <Leaf size={18} aria-hidden="true" />
          </p>
          <h1>Southern African, UK & American Gin Guide</h1>
          <p className="header-subtitle">
            <Sparkles size={16} aria-hidden="true" /> kadye meets botanicals · budget-friendly bottles · mixers & pairings
          </p>
        </div>
      </header>

      <nav className={`sticky-nav modern-nav ${menuOpen ? 'menu-open' : ''}`} aria-label="Primary">
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          <span>{menuOpen ? 'Close' : 'Menu'}</span>
        </button>
        <div className="nav-container" id="primary-navigation">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button key={id} type="button" className="nav-link" onClick={() => goToSection(id)}>
              <Icon size={16} aria-hidden="true" />
              {label}
            </button>
          ))}
        </div>
      </nav>

      <main>
        <section id="home" className="home-section">
          <div className="home-container">
            <h2 className="home-title">Explore Regions</h2>
            <p className="home-intro">Choose a region to view curated gin lists and serving tips.</p>
            <div className="region-buttons" role="list">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button key={id} type="button" className="region-btn" onClick={() => goToSection(id)} role="listitem">
                  <Icon size={16} aria-hidden="true" /> {label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="legacy-content" dangerouslySetInnerHTML={{ __html: sectionsMarkup }} />
      </main>

      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-section">
            <p className="footer-title">KADYE & GIN</p>
            <p className="footer-subtitle">Southern African, UK & American Gin Guide</p>
            <p className="footer-tagline">
              <strong>Breathing Gin Since 2023</strong>
            </p>
          </div>
          <div className="footer-section">
            <p>
              <em>Just knowledge, botanicals, and good taste from three continents.</em>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Kadye & Gin · Crafted with passion and botanicals</p>
        </div>
      </footer>
    </div>
  )
}
