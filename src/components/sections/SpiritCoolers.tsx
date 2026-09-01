import { ArrowLeft } from 'lucide-react'
import { coolersData } from '../../data/coolers'

export default function SpiritCoolers({ onNavigate }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <button type="button" className="section-back" onClick={() => onNavigate('home')}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </button>
        <div className="section-heading">
          <p className="section-eyebrow">Lifestyle</p>
          <h2 className="section-title">{coolersData.title}</h2>
          <p className="section-intro">{coolersData.intro}</p>
        </div>
        <div className="info-grid">
          {coolersData.coolers.map((cooler) => (
            <article key={cooler.title} className="info-card">
              <h3>{cooler.title}</h3>
              <p className="stack-copy">{cooler.profile}</p>
              <div className="stack-list compact-gap">
                <div className="stack-row">
                  <p className="stack-title">Recipe</p>
                  <p className="stack-copy">{cooler.recipe}</p>
                </div>
                <div className="stack-row">
                  <p className="stack-title">Best with</p>
                  <p className="stack-copy">{cooler.bestWith}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <article className="guide-card">
          <h3>{coolersData.guideTitle}</h3>
          <div className="guide-grid">
            {coolersData.guideTips.map((tip) => (
              <div key={tip.title} className="guide-item">
                <p className="stack-title">{tip.title}</p>
                <p className="stack-copy">{tip.description}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
