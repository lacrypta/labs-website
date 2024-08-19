import axios from 'axios'

const urlBaseYadio = 'https://api.yadio.io/exrates/'

async function getBtcPrice(type?: string): Promise<number> {
  switch (type) {
    case 'ars':
      return await axios.get(urlBaseYadio + 'ars').then(res => {
        return res.data.BTC
      })
    case 'usd':
    default:
      return await axios.get(urlBaseYadio + 'usd').then(res => {
        return res.data.BTC
      })
  }
}

async function satsToArs(sats: number = 1): Promise<number> {
  const btcPrice = await getBtcPrice('ars')
  return (sats * btcPrice) / 100000000
}

async function satsToUsd(sats: number = 1): Promise<number> {
  const btcPrice = await getBtcPrice()
  return (sats * btcPrice) / 100000000
}

async function getBlocks(
  startHeight?: number,
  retries: number = 3,
  delay: number = 1000
): Promise<any> {
  const url = startHeight
    ? `https://mempool.space/api/v1/blocks/${startHeight}`
    : 'https://mempool.space/api/v1/blocks'

  try {
    const response = await fetch(url)

    if (response.status === 429 && retries > 0) {
      // Rate limit error, retry with exponential backoff
      console.warn(`Rate limit hit, retrying in ${delay}ms...`)
      await new Promise(res => setTimeout(res, delay))
      return getBlocks(startHeight, retries - 1, delay * 2)
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data[0]?.height ?? null // Adjust based on the API response format
  } catch (error) {
    console.error('Error fetching blocks:', error)
    return null
  }
}
export { getBtcPrice, satsToArs, satsToUsd, getBlocks }
