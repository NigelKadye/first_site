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
          <p className="section-eyebrow">Knowledge</p>
          <h2 className="section-title">{coolersData.title}</h2>
          <p className="section-intro">{coolersData.intro}</p>
        </div>
        <section className="flat-section">
          <div className="flat-list">
            {coolersData.coolers.map((cooler) => (
              <div key={cooler.title} className="flat-list-item">
                <p className="stack-title">{cooler.title}</p>
                <p className="stack-copy">{cooler.profile}</p>
                <p className="stack-copy"><strong>Recipe:</strong> {cooler.recipe}</p>
                <p className="micro-note"><strong>Best with:</strong> {cooler.bestWith}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="flat-section">
          <h3>{coolersData.guideTitle}</h3>
          <div className="flat-list">
            {coolersData.guideTips.map((tip, index) => (
              <div key={tip.title} className="flat-list-item">
                <p className="section-eyebrow">Tip {index + 1}</p>
                <p className="stack-title">{tip.title}</p>
                <p className="stack-copy">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
