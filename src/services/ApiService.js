import axios from 'axios'

const fetchCoins = async (offset) => {
  try {
    const response = await axios.get('https://coinranking1.p.rapidapi.com/coins', {
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '20',
        offset: offset
      },
      headers: {
        'X-RapidAPI-Key': `${import.meta.env.VITE_RAPID_API_KEY}`,
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    })
    const data = response.data
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

const fetchCoinsByLimit = async (limit) => {
  try {
    const response = await axios.get('https://coinranking1.p.rapidapi.com/coins', {
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: limit,
        offset: '0'
      },
      headers: {
        'X-RapidAPI-Key': `${import.meta.env.VITE_RAPID_API_KEY}`,
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    })
    const data = response.data
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

const fetchCoinsBySearch = async (search) => {
  try {
    const response = await axios.get('https://coinranking1.p.rapidapi.com/coins', {
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '5',
        offset: 0,
        search: search
      },
      headers: {
        'X-RapidAPI-Key': `${import.meta.env.VITE_RAPID_API_KEY}`,
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    })
    const data = response.data
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

const fetchCoin = async (uuid) => {
  try {
    const response = await axios.get(`https://coinranking1.p.rapidapi.com/coin/${uuid}`, {
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h'
      },
      headers: {
        'X-RapidAPI-Key': `${import.meta.env.VITE_RAPID_API_KEY}`,
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

const fetchCoinPriceHistory = async (uuid) => {
  try {
    const response = await axios.get(`https://coinranking1.p.rapidapi.com/coin/${uuid}/history`, {
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h'
      },
      headers: {
        'X-RapidAPI-Key': `${import.meta.env.VITE_RAPID_API_KEY}`,
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

const fetchCoinPrice = async (uuid) => {
  try {
    const response = await axios.get(`https://coinranking1.p.rapidapi.com/coin/${uuid}/price`, {
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl'
      },
      headers: {
        'X-RapidAPI-Key': `${import.meta.env.VITE_RAPID_API_KEY}`,
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

const fetchCoinPriceHistoryTime = async (uuid, time) => {
  try {
    const response = await axios.get(`https://coinranking1.p.rapidapi.com/coin/${uuid}/history`, {
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: time
      },
      headers: {
        'X-RapidAPI-Key': `${import.meta.env.VITE_RAPID_API_KEY}`,
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

const fetchGlobalStats = async () => {
  try {
    const response = await axios.get('https://coinranking1.p.rapidapi.com/stats', {
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl'
      },
      headers: {
        'X-RapidAPI-Key': `${import.meta.env.VITE_RAPID_API_KEY}`,
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    })
    const data = response.data
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export {
  fetchCoins,
  fetchCoinsByLimit,
  fetchCoin,
  fetchCoinPriceHistory,
  fetchCoinPriceHistoryTime,
  fetchCoinsBySearch,
  fetchCoinPrice,
  fetchGlobalStats
}
