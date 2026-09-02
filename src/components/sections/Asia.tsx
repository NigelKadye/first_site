import { ArrowLeft } from 'lucide-react'
import GinCard from '../GinCard'
import { asianGins } from '../../data/gins'

export default function Asia({ onNavigate }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <button type="button" className="section-back" onClick={() => onNavigate('home')}>
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Home
        </button>
        <div className="section-heading">
          <p className="section-eyebrow">Regional collection</p>
          <h2 className="section-title">{asianGins.title}</h2>
          <p className="section-intro">{asianGins.intro}</p>
        </div>
        {asianGins.regions.map((region) => (
          <section key={region.id} className="region-block">
            <h3 className="region-title">{region.title}</h3>
            <div className="card-grid">
              {region.gins.map((gin) => (
                <GinCard key={gin.name} {...gin} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}
