import { ArrowLeft } from 'lucide-react'
import { servingData } from '../../data/serving'

export default function Serving({ onNavigate }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <button type="button" className="section-back" onClick={() => onNavigate('home')}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </button>
        <div className="section-heading">
          <p className="section-eyebrow">Lifestyle</p>
          <h2 className="section-title">{servingData.title}</h2>
          <p className="section-intro">{servingData.intro}</p>
        </div>
        <div className="info-grid">
          {servingData.cards.map((card) => (
            <article key={card.title} className="info-card">
              <h3>{card.title}</h3>
              {card.body ? <p className="stack-copy">{card.body}</p> : null}
              {card.items.length ? (
                <div className="stack-list compact-gap">
                  {card.items.map((item) => (
                    <p key={item} className="stack-copy">{item}</p>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
