import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Nav({ activeSection, onNavigate, navGroups }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [activeSection])

  const handleNavigate = (sectionId) => {
    onNavigate(sectionId)
    setMenuOpen(false)
  }

  return (
    <nav className="sticky-nav" aria-label="Primary">
      <div className="site-width nav-shell">
        <div className="nav-top-row">
          <button
            type="button"
            className={`home-link ${activeSection === 'home' ? 'is-active' : ''}`}
            onClick={() => handleNavigate('home')}
          >
            Home
          </button>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>

        <div id="primary-navigation" className={`nav-groups ${menuOpen ? 'is-open' : ''}`}>
          {navGroups.map((group) => (
            <section key={group.title} className="nav-group" aria-label={group.title}>
              <p className="nav-group-title">{group.title}</p>
              <div className="nav-links">
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
                    onClick={() => handleNavigate(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </nav>
  )
}
