export const navGroups = [
  {
    slug: 'regions',
    title: 'Regions',
    description: 'Browse one gin region at a time with dedicated collection pages.',
    items: [
      { id: 'southern-africa', label: 'Southern Africa', description: 'African craft bottles and botanical signatures.' },
      { id: 'europe', label: 'Europe', description: 'London dry classics, Mediterranean bottles, and modern European distillers.' },
      { id: 'usa', label: 'United States', description: 'American craft gin picks with bold flavor profiles.' },
      { id: 'americas', label: 'Southern America & Mexico', description: 'Latin American expressions and bright serving ideas.' },
      { id: 'asia', label: 'Asia', description: 'Japanese, Indian, and Southeast Asian gins shaped by local botanicals.' },
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
      { id: 'craft-gin', label: 'First Date Gin Tips', description: 'Zero-proof options, gin-making date ideas, and visitor leads.' },
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
