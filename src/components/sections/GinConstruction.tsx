import { ArrowLeft } from 'lucide-react'
import { ginConstructionData } from '../../data/ginConstruction'

export default function GinConstruction({ onNavigate }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <button type="button" className="section-back" onClick={() => onNavigate('home')}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </button>
        <div className="section-heading">
          <p className="section-eyebrow">Knowledge</p>
          <h2 className="section-title">{ginConstructionData.title}</h2>
          <p className="section-intro">{ginConstructionData.intro}</p>
        </div>
        <div className="flat-section-list">
          {ginConstructionData.sections.map((section) => (
            <section key={section.title} className="flat-section">
              <h3>{section.title}</h3>
              <p className="stack-copy">{section.body}</p>
            </section>
          ))}
        </div>
        <p className="flat-note"><strong>Try this:</strong> {ginConstructionData.tryThis}</p>
      </div>
    </section>
  )
}
