import type { NextApiRequest, NextApiResponse } from 'next'

type Cocktail = {
  strDrink: string
  strGlass?: string
  strDrinkThumb?: string
}

type GinProduct = {
  product_name?: string
  brands?: string
  countries_tags?: string[]
}

type ApiResponse = {
  drinks?: Cocktail[]
  gins?: GinProduct[]
  liveGins?: boolean
  error?: string
}

const fallbackGins: GinProduct[] = [
  { product_name: 'Roku Gin', brands: 'Suntory', countries_tags: ['en:japan'] },
  { product_name: 'Hapusa Himalayan Dry Gin', brands: 'NAO Spirits', countries_tags: ['en:india'] },
  { product_name: 'Monkey 47 Schwarzwald Dry Gin', brands: 'Black Forest Distillers', countries_tags: ['en:germany'] },
  { product_name: 'Gin Mare', brands: 'Gin Mare', countries_tags: ['en:spain'] },
  { product_name: 'Malfy Con Limone', brands: 'Malfy', countries_tags: ['en:italy'] },
  { product_name: 'Hernö Gin', brands: 'Hernö Gin', countries_tags: ['en:sweden'] },
  { product_name: 'Four Pillars Rare Dry Gin', brands: 'Four Pillars', countries_tags: ['en:australia'] },
  { product_name: 'Citadelle Gin', brands: 'Maison Ferrand', countries_tags: ['en:france'] },
]

export default async function handler(_request: NextApiRequest, response: NextApiResponse<ApiResponse>) {
  const [cocktailResult, ginResult] = await Promise.allSettled([
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin'),
    fetch('https://world.openfoodfacts.org/api/v2/search?categories_tags_en=gin&page_size=12&fields=product_name,brands,countries_tags', {
      headers: { 'User-Agent': 'Kadye-Gin-Guide/1.0' },
    }),
  ])

  const drinks = cocktailResult.status === 'fulfilled' && cocktailResult.value.ok
    ? ((await cocktailResult.value.json()).drinks ?? []).slice(0, 8)
    : []
  const productGins = ginResult.status === 'fulfilled' && ginResult.value.ok
    ? ((await ginResult.value.json()).products ?? []).filter((gin) => gin.product_name).slice(0, 8)
    : []
  const liveGins = productGins.length > 0
  const gins = liveGins ? productGins : fallbackGins

  if (!drinks.length && !gins.length) {
    response.status(502).json({ error: 'Live gin suggestions are unavailable right now.' })
    return
  }

  response.status(200).json({ drinks, gins, liveGins })
}
