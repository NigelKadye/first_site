import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { getGroupBySlug, topLevelNav } from '../siteConfig'

export default function Nav({ activeGroupSlug, activePageSlug = null }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [sectionMenuOpen, setSectionMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
    setSectionMenuOpen(false)
  }, [activePageSlug])

  const activeGroup = useMemo(() => {
    if (!activeGroupSlug) {
      return null
    }

    return getGroupBySlug(activeGroupSlug)
  }, [activeGroupSlug])

  const isTopLinkActive = (href, slug) => {
    if (href === '/') {
      return activePageSlug === null
    }

    return activeGroupSlug === slug || activePageSlug === slug
  }

  return (
    <nav className="sticky-nav" aria-label="Primary">
      <div className="site-width nav-shell">
        <div className="nav-top-row">
          {activePageSlug !== null ? (
            <Link href="/" prefetch={false} className="home-link" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          ) : null}
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen || undefined}
            aria-controls="primary-navigation-panel"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            <span>{menuOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>

        <div id="primary-navigation-panel" className={`nav-panel ${menuOpen ? 'is-open' : ''}`}>
          <div className="nav-tabs">
            {topLevelNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                className={`nav-tab ${isTopLinkActive(item.href, item.slug) ? 'is-active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {activeGroup ? (
            <div className="nav-context">
              <div className="nav-context-row">
                <p className="nav-group-title">{activeGroup.title} pages</p>
                <button
                  type="button"
                  className="menu-toggle section-menu-toggle"
                  aria-expanded={sectionMenuOpen}
                  aria-controls="section-navigation"
                  onClick={() => setSectionMenuOpen((current) => !current)}
                >
                  <span>{sectionMenuOpen ? 'Hide pages' : 'Show pages'}</span>
                  <ChevronDown size={18} aria-hidden="true" />
                </button>
              </div>

              <div id="section-navigation" className={`nav-groups ${sectionMenuOpen ? 'is-open' : ''}`}>
                <section className="nav-group" aria-label={activeGroup.title}>
                  <div className="nav-links">
                    {activeGroup.items.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        prefetch={false}
                        className={`nav-link ${activePageSlug === item.id ? 'is-active' : ''}`}
                        onClick={() => {
                          setMenuOpen(false)
                          setSectionMenuOpen(false)
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  )
}
