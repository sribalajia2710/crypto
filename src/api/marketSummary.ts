import axios from 'axios';

export async function fetchMarketSummary(): Promise<any> {
  try {
    const response = await axios.get('https://api.bittrex.com/v3/markets/summaries'
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching market summary: ' + error);
  }
}

export async function searchCurrencyBySymbol(symbol: string) {
  try {
    const response = await axios.get(`https://api.bittrex.com/v3/markets/${symbol}/summary`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
