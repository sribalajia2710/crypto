import { all, call } from 'redux-saga/effects';
import cryptoMarketSagas  from './cryptoMarket/market.saga.ts';

export default function* rootSaga() {
  yield all([
    call(cryptoMarketSagas),
  ]);
}