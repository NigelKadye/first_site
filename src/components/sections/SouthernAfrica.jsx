import GinCard from '../GinCard'
import { southernAfricaGins } from '../../data/gins'

import { ArrowLeft } from 'lucide-react'

function BackHomeButton({ onNavigate }) {
  return (
    <button type="button" className="section-back" onClick={() => onNavigate('home')}>
      <ArrowLeft size={16} aria-hidden="true" />
      Back to Home
    </button>
  )
}


export default function SouthernAfrica({ onNavigate }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <BackHomeButton onNavigate={onNavigate} />
        <div className="section-heading">
          <p className="section-eyebrow">Regional collection</p>
          <h2 className="section-title">{southernAfricaGins.title}</h2>
          <p className="section-intro">{southernAfricaGins.intro}</p>
        </div>
        {southernAfricaGins.regions.map((region) => (
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
