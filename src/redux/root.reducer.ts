import { combineReducers } from 'redux';
import marketDataReducer from './cryptoMarket/market.reducer';

const rootReducer = combineReducers({
    cryptoMarketData: marketDataReducer,
  });

export default rootReducer