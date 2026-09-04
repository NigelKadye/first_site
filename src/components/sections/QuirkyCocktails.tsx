import { ArrowLeft } from 'lucide-react'
import { quirkyCocktailsData } from '../../data/quirkyCocktails'

export default function QuirkyCocktails({ onNavigate }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <button type="button" className="section-back" onClick={() => onNavigate('home')}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </button>
        <div className="section-heading">
          <p className="section-eyebrow">Quirky pairings</p>
          <h2 className="section-title">{quirkyCocktailsData.title}</h2>
          <p className="section-intro">{quirkyCocktailsData.intro}</p>
        </div>
        <div className="flat-list quirky-cocktail-list">
          {quirkyCocktailsData.cocktails.map((cocktail, index) => (
            <article key={cocktail.name} className="flat-list-item quirky-cocktail-item">
              <p className="section-eyebrow">{String(index + 1).padStart(2, '0')}</p>
              <h3>{cocktail.name}</h3>
              <p className="stack-copy"><strong>Build:</strong> {cocktail.recipe}</p>
              <p className="stack-copy"><strong>Why it works:</strong> {cocktail.why}</p>
              <p className="micro-note"><strong>Pair it with:</strong> {cocktail.pairing}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
