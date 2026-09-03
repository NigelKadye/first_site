import { ArrowLeft } from 'lucide-react'
import { craftGinData } from '../../data/craftGin'

export default function CraftGin({ onNavigate }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <button type="button" className="section-back" onClick={() => onNavigate('home')}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </button>
        <div className="section-heading">
          <p className="section-eyebrow">Extras</p>
          <h2 className="section-title">{craftGinData.title}</h2>
          <p className="section-intro">{craftGinData.intro}</p>
        </div>
        <section className="flat-section">
          <h3>{craftGinData.howToTitle}</h3>
          <ol className="visit-list craft-steps-list">
            {craftGinData.steps.map((step) => (
              <li key={step.title} className="visit-list-item">
                <div>
                  <p className="stack-title">{step.title}</p>
                </div>
                <p className="stack-copy">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </section>
  )
}
