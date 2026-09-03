import GinList from '../GinList'
import { unitedStatesGins } from '../../data/gins'

import { ArrowLeft } from 'lucide-react'

function BackHomeButton({ onNavigate }) {
  return (
    <button type="button" className="section-back" onClick={() => onNavigate('home')}>
      <ArrowLeft size={16} aria-hidden="true" />
      Back to Home
    </button>
  )
}


export default function UnitedStates({ onNavigate }) {
  return (
    <section className="content-section">
      <div className="site-width section-shell">
        <BackHomeButton onNavigate={onNavigate} />
        <div className="section-heading">
          <p className="section-eyebrow">Regional collection</p>
          <h2 className="section-title">{unitedStatesGins.title}</h2>
          <p className="section-intro">{unitedStatesGins.intro}</p>
        </div>
        <GinList regions={unitedStatesGins.regions} />
      </div>
    </section>
  )
}
