import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function Home({ items }) {
  return (
    <section className="hero-home">
      <div className="site-width hero-panel">
        <p className="section-eyebrow">Explore the guide</p>
        <h2 className="hero-title">Choose a page for you.</h2>
        <p className="hero-copy">
          Jump in for regions. lifestyle picks. extras.
        </p>
        <div className="hero-actions">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="explore-button">
              <span className="explore-copy">
                <span>{item.label}</span>
                <span className="explore-meta">{item.description}</span>
              </span>
              <ChevronRight size={18} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
