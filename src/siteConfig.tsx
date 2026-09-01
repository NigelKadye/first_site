import Americas from './components/sections/Americas'
import Botanicals from './components/sections/Botanicals'
import Budget from './components/sections/Budget'
import FirstDates from './components/sections/FirstDates'
import Mixers from './components/sections/Mixers'
import Pairings from './components/sections/Pairings'
import QuickFixes from './components/sections/QuickFixes'
import Serving from './components/sections/Serving'
import SouthernAfrica from './components/sections/SouthernAfrica'
import SpiritCoolers from './components/sections/SpiritCoolers'
import UnitedKingdom from './components/sections/UnitedKingdom'
import UnitedStates from './components/sections/UnitedStates'

export const navGroups = [
  {
    slug: 'regions',
    title: 'Regions',
    description: 'Browse one gin region at a time with dedicated collection pages.',
    items: [
      { id: 'southern-africa', label: 'Southern Africa', description: 'African craft bottles and botanical signatures.' },
      { id: 'uk', label: 'United Kingdom', description: 'Classic London dry styles and modern British distillers.' },
      { id: 'usa', label: 'United States', description: 'American craft gin picks with bold flavor profiles.' },
      { id: 'americas', label: 'Southern America & Mexico', description: 'Latin American expressions and bright serving ideas.' },
    ],
  },
  {
    slug: 'knowledge',
    title: 'Knowledge',
    description: 'Learn the botanicals, mixers, and coolers that shape each serve.',
    items: [
      { id: 'botanicals', label: 'Botanicals', description: 'Juniper, citrus, florals, and how they change a gin.' },
      { id: 'mixers', label: 'Mixers', description: 'Tonic, soda, and pairing notes for different styles.' },
      { id: 'spirit-coolers', label: 'Spirit Coolers', description: 'Refreshing gin cooler combinations for easy pours.' },
    ],
  },
  {
    slug: 'lifestyle',
    title: 'Lifestyle',
    description: 'Choose serves by budget, occasion, and practical hosting tips.',
    items: [
      { id: 'budget', label: 'Budget Picks', description: 'Affordable bottles that still feel elevated.' },
      { id: 'first-dates', label: 'First Dates', description: 'Stylish pours for easy conversation and confidence.' },
      { id: 'serving', label: 'Serving Tips', description: 'Glassware, garnish, and temperature guidance.' },
    ],
  },
  {
    slug: 'extras',
    title: 'Extras',
    description: 'Quick fixes and food pairings for finishing touches.',
    items: [
      { id: 'pairings', label: 'Food Pairings', description: 'Simple snacks and plates that match each style.' },
      { id: 'quick-fixes', label: 'Quick Gin Fixes', description: 'Fast ways to rebalance a drink and rescue a serve.' },
    ],
  },
].map((group) => ({
  ...group,
  href: `/${group.slug}`,
  items: group.items.map((item) => ({
    ...item,
    href: `/${item.id}`,
    groupSlug: group.slug,
  })),
}))

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

export const topLevelNav = [
  { href: '/', label: 'Home', slug: null },
  ...navGroups.map((group) => ({ href: group.href, label: group.title, slug: group.slug })),
]

export const homeItems = navGroups.map((group) => ({
  href: group.href,
  label: group.title,
  description: group.description,
}))

export const allPageSlugs = navGroups.flatMap((group) => [group.slug, ...group.items.map((item) => item.id)])

export function getGroupBySlug(slug) {
  return navGroups.find((group) => group.slug === slug) ?? null
}

export function getSectionBySlug(slug) {
  for (const group of navGroups) {
    const item = group.items.find((entry) => entry.id === slug)

    if (item) {
      return {
        ...item,
        groupSlug: group.slug,
        groupTitle: group.title,
        component: sectionComponents[slug],
      }
    }
  }

  return null
}

export function getSectionSiblings(slug) {
  const section = getSectionBySlug(slug)

  if (!section) {
    return { previousItem: null, nextItem: null }
  }

  const group = getGroupBySlug(section.groupSlug)
  const items = group?.items ?? []
  const currentIndex = items.findIndex((item) => item.id === slug)

  return {
    previousItem: currentIndex > 0 ? items[currentIndex - 1] : null,
    nextItem: currentIndex < items.length - 1 ? items[currentIndex + 1] : null,
  }
}
