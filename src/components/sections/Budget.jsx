import { ArrowLeft } from 'lucide-react'
import { budgetData } from '../../data/budget'

export default function Budget({ onNavigate }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <button type="button" className="section-back" onClick={() => onNavigate('home')}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </button>
        <div className="section-heading">
          <p className="section-eyebrow">Lifestyle</p>
          <h2 className="section-title">{budgetData.title}</h2>
          <p className="section-intro">{budgetData.intro}</p>
        </div>
        <div className="info-grid">
          {budgetData.groups.map((group) => (
            <article key={group.title} className="info-card">
              <h3>{group.title}</h3>
              <div className="stack-list">
                {group.items.map((item) => (
                  <div key={item.name} className="stack-row">
                    <p className="stack-title">{item.name}</p>
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
