import MarketDataActionTypes  from './market.types'

  export const fetchMarketItemsStart = () => (
    {
      type: MarketDataActionTypes.FETCH_MARKET_ITEMS_START,
    }
  )

  export const fetchMarketItemsSuccess = (payload: any) => (
    {
      type: MarketDataActionTypes.FETCH_MARKET_ITEMS_SUCCESS,
      payload
    }
  )
  
  export const fetchMarketItemsFailure = (payload: any) => (
    {
      type: MarketDataActionTypes.FETCH_MARKET_ITEMS_FAILURE,
      payload
    }
  )

  export const fetchCurrencySearchStart = (payload: any) => (
    {
      type: MarketDataActionTypes.FETCH_CURRENCY_SEARCH_START,
      payload
    }
  )

  export const fetchCurrencySearchSuccess = (payload: any) => (
    {
      type: MarketDataActionTypes.FETCH_CURRENCY_SEARCH_SUCCESS,
      payload
    }
  )
  
  export const fetchCurrencySearchFailure = (payload: any) => (
    {
      type: MarketDataActionTypes.FETCH_CURRENCY_SEARCH_FAILURE,
      payload
    }
  )

  export const showLoader = (payload: any) => (
    {
      type: MarketDataActionTypes.SHOW_LOADER,
      payload
    }
  )
