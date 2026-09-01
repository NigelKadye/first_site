import { ArrowLeft } from 'lucide-react'
import { pairingsData } from '../../data/pairings'

export default function Pairings({ onNavigate }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <button type="button" className="section-back" onClick={() => onNavigate('home')}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </button>
        <div className="section-heading">
          <p className="section-eyebrow">Extras</p>
          <h2 className="section-title">{pairingsData.title}</h2>
          <p className="section-intro">{pairingsData.intro}</p>
        </div>
        <div className="info-grid">
          {pairingsData.pairings.map((pairing) => (
            <article key={pairing.title} className="info-card">
              <h3>{pairing.title}</h3>
              <p className="stack-copy">{pairing.profile}</p>
              <div className="stack-list compact-gap">
                <div className="stack-row">
                  <p className="stack-title">Try</p>
                  <p className="stack-copy">{pairing.try}</p>
                </div>
                <div className="stack-row">
                  <p className="stack-title">Easy snack plate</p>
                  <p className="stack-copy">{pairing.snackPlate}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="rule-banner">{pairingsData.rule}</div>
      </div>
    </section>
  )
}
