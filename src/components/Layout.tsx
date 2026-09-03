import Header from './Header'
import BrandLogo from './BrandLogo'
import Nav from './Nav'

export default function Layout({ activeGroupSlug = null, activePageSlug = null, children }) {
  return (
    <div className="app-shell">
      <Header />
      <Nav activeGroupSlug={activeGroupSlug} activePageSlug={activePageSlug} />
      <main id="main-content" className="page-main">{children}</main>
      <footer className="site-footer">
        <div className="site-width footer-inner">
          <div>
            <div className="footer-brand">
              <BrandLogo compact />
            </div>
            <p className="footer-copy">Africa. Europe. Asia. Americas</p>
          </div>
          <p className="footer-note">Just knowledge, botanicals, and good taste from different continents.</p>
        </div>
      </footer>
    </div>
  )
}
