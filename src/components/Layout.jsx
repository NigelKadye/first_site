import Header from './Header'
import Nav from './Nav'

export default function Layout({ activeSection, onNavigate, navGroups, children }) {
  return (
    <div className="app-shell">
      <Header />
      <Nav activeSection={activeSection} onNavigate={onNavigate} navGroups={navGroups} />
      <main id="main-content" className="page-main">{children}</main>
      <footer className="site-footer">
        <div className="site-width footer-inner">
          <div>
            <p className="footer-brand">KADYE & GIN</p>
            <p className="footer-copy">Southern African, UK & American Gin Guide</p>
          </div>
          <p className="footer-note">Just knowledge, botanicals, and good taste from three continents.</p>
        </div>
      </footer>
    </div>
  )
}
