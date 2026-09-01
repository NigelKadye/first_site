import { ChevronRight } from 'lucide-react'

export default function Home({ items, onNavigate }) {
  return (
    <section className="hero-home">
      <div className="site-width hero-panel">
        <p className="section-eyebrow">Explore the guide</p>
        <h2 className="hero-title">Choose a region or topic.</h2>
        <p className="hero-copy">
          Discover curated gin bottles, distinctive botanicals, easy coolers, budget-friendly picks, and
          thoughtful serving rituals without leaving the app shell.
        </p>
        <div className="hero-actions">
          {items.map((item) => (
            <button key={item.id} type="button" className="explore-button" onClick={() => onNavigate(item.id)}>
              <span>{item.label}</span>
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
