import { ArrowLeft } from 'lucide-react'
import { quickFixesData } from '../../data/quickFixes'

export default function QuickFixes({ onNavigate }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <button type="button" className="section-back" onClick={() => onNavigate('home')}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </button>
        <div className="section-heading">
          <p className="section-eyebrow">Extras</p>
          <h2 className="section-title">{quickFixesData.title}</h2>
          <p className="section-intro">{quickFixesData.intro}</p>
        </div>
        <div className="info-grid">
          {quickFixesData.fixes.map((fix) => (
            <article key={fix.title} className="info-card">
              <h3>{fix.title}</h3>
              <p className="stack-copy">{fix.description}</p>
              <div className="stack-row accent-row">
                <p className="stack-title">{fix.detailLabel}</p>
                <p className="stack-copy">{fix.detailValue}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="rule-banner">
          <strong>{quickFixesData.highlightTitle}:</strong> {quickFixesData.highlight}
        </div>
      </div>
    </section>
  )
}
