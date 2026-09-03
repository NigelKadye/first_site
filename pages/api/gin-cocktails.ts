import type { NextApiRequest, NextApiResponse } from 'next'

type Cocktail = {
  strDrink: string
  strDrinkThumb?: string
}

type ApiResponse = {
  drinks?: Cocktail[] | null
  error?: string
}

export default async function handler(_request: NextApiRequest, response: NextApiResponse<ApiResponse>) {
  try {
    const apiResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin')

    if (!apiResponse.ok) {
      throw new Error('Cocktail service unavailable')
    }

    const data = await apiResponse.json()
    const drinks = Array.isArray(data.drinks) ? data.drinks.slice(0, 6) : []
    response.status(200).json({ drinks })
  } catch {
    response.status(502).json({ error: 'Live cocktail suggestions are unavailable right now.' })
  }
}
