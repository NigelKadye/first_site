import { ArrowLeft } from 'lucide-react'
import { tastingServeData } from '../../data/tastingServe'

function ReadingList({ items }) {
  return (
    <div className="flat-list">
      {items.map((item, index) => (
        <div key={item.title} className="flat-list-item">
          <p className="section-eyebrow">{String(index + 1).padStart(2, '0')}</p>
          <p className="stack-title">{item.title}</p>
          <p className="stack-copy">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default function TastingServe({ onNavigate }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <button type="button" className="section-back" onClick={() => onNavigate('home')}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </button>
        <div className="section-heading">
          <p className="section-eyebrow">Knowledge</p>
          <h2 className="section-title">{tastingServeData.title}</h2>
          <p className="section-intro">{tastingServeData.intro}</p>
        </div>
        <section className="flat-section">
          <h3>Taste in five passes</h3>
          <ReadingList items={tastingServeData.tastingSteps} />
        </section>
        <section className="flat-section">
          <h3>Build the serve</h3>
          <ReadingList items={tastingServeData.serveRules} />
        </section>
        <section className="flat-section">
          <h3>Quick corrections</h3>
          <ReadingList items={tastingServeData.quickQuestions} />
        </section>
      </div>
    </section>
  )
}
