import { useMemo, useState } from 'react'
import Layout from './components/Layout'
import Home from './components/Home'
import SouthernAfrica from './components/sections/SouthernAfrica'
import UnitedKingdom from './components/sections/UnitedKingdom'
import UnitedStates from './components/sections/UnitedStates'
import Americas from './components/sections/Americas'
import Botanicals from './components/sections/Botanicals'
import Mixers from './components/sections/Mixers'
import SpiritCoolers from './components/sections/SpiritCoolers'
import Budget from './components/sections/Budget'
import FirstDates from './components/sections/FirstDates'
import Serving from './components/sections/Serving'
import Pairings from './components/sections/Pairings'
import QuickFixes from './components/sections/QuickFixes'

const navGroups = [
  {
    title: 'Regions',
    items: [
      { id: 'southern-africa', label: 'Southern Africa' },
      { id: 'uk', label: 'United Kingdom' },
      { id: 'usa', label: 'United States' },
      { id: 'americas', label: 'Southern America & Mexico' },
    ],
  },
  {
    title: 'Knowledge',
    items: [
      { id: 'botanicals', label: 'Botanicals' },
      { id: 'mixers', label: 'Mixers' },
      { id: 'spirit-coolers', label: 'Spirit Coolers' },
    ],
  },
  {
    title: 'Lifestyle',
    items: [
      { id: 'budget', label: 'Budget Picks' },
      { id: 'first-dates', label: 'First Dates' },
      { id: 'serving', label: 'Serving Tips' },
    ],
  },
  {
    title: 'Extras',
    items: [
      { id: 'pairings', label: 'Food Pairings' },
      { id: 'quick-fixes', label: 'Quick Gin Fixes' },
    ],
  },
]

const sectionComponents = {
  'southern-africa': SouthernAfrica,
  uk: UnitedKingdom,
  usa: UnitedStates,
  americas: Americas,
  botanicals: Botanicals,
  mixers: Mixers,
  'spirit-coolers': SpiritCoolers,
  budget: Budget,
  'first-dates': FirstDates,
  serving: Serving,
  pairings: Pairings,
  'quick-fixes': QuickFixes,
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  const homeItems = useMemo(
    () => navGroups.filter((group) => group.title !== 'Extras').flatMap((group) => group.items),
    [],
  )

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId)
  }

  const ActiveSection = sectionComponents[activeSection]

  return (
    <Layout activeSection={activeSection} onNavigate={handleNavigate} navGroups={navGroups}>
      <div className="content-stage" key={activeSection}>
        {ActiveSection ? <ActiveSection onNavigate={handleNavigate} /> : <Home items={homeItems} onNavigate={handleNavigate} />}
      </div>
    </Layout>
  )
}
