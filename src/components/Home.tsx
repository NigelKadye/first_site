import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import ExplorePanel from './ExplorePanel'

export default function Home({ items }) {
  return (
    <section className="hero-home">
      <div className="home-stage">
        <div className="hero-panel">
          <div className="hero-intro">
            <p className="section-eyebrow">Explore the guide</p>
            <h2 className="hero-title">Find your next pour.</h2>
            <p className="hero-copy">
              Regional bottles, practical know-how, and good reasons to pour another round.
            </p>
          </div>
          <div className="hero-actions" aria-label="Guide sections">
            {items.map((item, index) => (
              <Link key={item.href} href={item.href} className="explore-button">
                <span className="explore-number" aria-hidden="true">0{index + 1}</span>
                <span className="explore-copy">
                  <span className="explore-title">{item.label}</span>
                  <span className="explore-meta">{item.description}</span>
                </span>
                <ChevronRight size={18} aria-hidden="true" />
              </Link>
            ))}
          </div>
          <p className="hero-footnote">Curated across Africa, Europe, and the Americas.</p>
        </div>
        <ExplorePanel items={items} />
      </div>
    </section>
  )
}
