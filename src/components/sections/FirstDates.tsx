import { ArrowLeft } from 'lucide-react'
import { firstDatesData } from '../../data/firstDates'

export default function FirstDates({ onNavigate }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <button type="button" className="section-back" onClick={() => onNavigate('home')}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </button>
        <div className="section-heading">
          <p className="section-eyebrow">Lifestyle</p>
          <h2 className="section-title">{firstDatesData.title}</h2>
          <p className="section-intro">{firstDatesData.intro}</p>
        </div>
        <section className="flat-section">
          {firstDatesData.categories.map((category) => (
            <section key={category.title} className="flat-subsection">
              <h3>{category.title}</h3>
              <p className="subtle-copy">{category.subtitle}</p>
              <div className="flat-list">
                {category.gins.map((gin) => (
                  <div key={gin.name} className="flat-list-item">
                    <p className="stack-title">{gin.name}</p>
                    <p className="stack-copy">{gin.why}</p>
                    <p className="micro-note">Order: {gin.order}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </section>
      </div>
    </section>
  )
}
