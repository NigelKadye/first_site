import { ArrowLeft } from 'lucide-react'
import { botanicalsData } from '../../data/botanicals'

export default function Botanicals({ onNavigate }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <button type="button" className="section-back" onClick={() => onNavigate('home')}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </button>
        <div className="section-heading">
          <p className="section-eyebrow">Knowledge</p>
          <h2 className="section-title">{botanicalsData.title}</h2>
          <p className="section-intro">{botanicalsData.intro}</p>
        </div>
        <div className="info-grid">
          {botanicalsData.categories.map((category) => (
            <article key={category.title} className="info-card">
              <h3>{category.title}</h3>
              <div className="stack-list">
                {category.items.map((item) => (
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
