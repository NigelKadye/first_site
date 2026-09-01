import { ArrowLeft } from 'lucide-react'
import { mixersData } from '../../data/mixers'

export default function Mixers({ onNavigate }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <button type="button" className="section-back" onClick={() => onNavigate('home')}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </button>
        <div className="section-heading">
          <p className="section-eyebrow">Knowledge</p>
          <h2 className="section-title">{mixersData.title}</h2>
          <p className="section-intro">{mixersData.intro}</p>
        </div>
        <div className="info-grid">
          {mixersData.categories.map((category) => (
            <article key={category.title} className="info-card">
              <h3>{category.title}</h3>
              <div className="stack-list">
                {category.items.map((item) => (
                  <div key={item.label} className="stack-row">
                    <p className="stack-title">{item.label}</p>
                    <p className="stack-copy">{item.description}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
