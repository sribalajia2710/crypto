import MarketActionTypes from "./market.types";

const INITIAL_STATE = {
  marketItems: [],
  isFetching: false,
  errorMessages: [],
  showLoader: false,
};

const marketDataReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case MarketActionTypes.FETCH_MARKET_ITEMS_START:
      return {
        ...state,
        isFetching: true,
      };
    case MarketActionTypes.FETCH_MARKET_ITEMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        marketItems: action.payload,
      };
    case MarketActionTypes.FETCH_MARKET_ITEMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessages: [...state.errorMessages, action.payload],
      };

    case MarketActionTypes.FETCH_CURRENCY_SEARCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case MarketActionTypes.FETCH_CURRENCY_SEARCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        marketItems: action.payload,
      };
    case MarketActionTypes.FETCH_CURRENCY_SEARCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessages: [...state.errorMessages, action.payload],
      };

    case MarketActionTypes.SHOW_LOADER:
      return {
        ...state,
        showLoader: action.payload,
      };
    default:
      return state;
  }
};

export default marketDataReducer;
