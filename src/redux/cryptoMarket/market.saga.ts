import { put, all, call, takeLatest } from "redux-saga/effects";
import {
  fetchMarketItemsSuccess,
  fetchMarketItemsFailure,
  fetchCurrencySearchSuccess,
  fetchCurrencySearchFailure,
  showLoader,
} from "./market.actions";
import MarketDataActionTypes from "./market.types";
import * as cryptoMarketApi from "../../api/marketSummary";

interface MarketData {
  symbol: string;
  high: string;
  low: string;
  volume: string;
  quoteVolume: string;
  percentChange?: number;
  updatedAt: string;
}

type FetchCurrencySearchStartAction = {
  type: typeof MarketDataActionTypes.FETCH_CURRENCY_SEARCH_START;
  payload: string; // Adjust the type accordingly
};

export function* fetchMarketItemsStartAsync({}) {
  try {
    const data: [MarketData] = yield call(cryptoMarketApi.fetchMarketSummary);
    yield put(fetchMarketItemsSuccess(data));
    yield put(showLoader(false));
  } catch (error: any) {
    yield put(fetchMarketItemsFailure(error.message));
    yield put(showLoader(false));
  }
}

export function* fetchMarketItemsStart() {
  yield takeLatest(
    MarketDataActionTypes.FETCH_MARKET_ITEMS_START,
    fetchMarketItemsStartAsync
  );
}

export function* fetchCurrencySearchStartAsync(
  action: FetchCurrencySearchStartAction
) {
  try {
    if (action.payload) {
      const data: MarketData = yield call(
        cryptoMarketApi.searchCurrencyBySymbol,
        action.payload
      );
      yield put(fetchCurrencySearchSuccess(data));
    } else {
      const { status }: { status: number } = yield call(
        cryptoMarketApi.fetchMarketSummary
      );

      if (status === 404) {
        yield put(fetchCurrencySearchSuccess([]));
      } else {
        const data: [MarketData] = yield call(
          cryptoMarketApi.fetchMarketSummary
        );
        yield put(fetchCurrencySearchSuccess(data));
      }
    }
    yield put(showLoader(false));
  } catch (error: any) {
    yield put(fetchCurrencySearchSuccess([]));
    yield put(fetchCurrencySearchFailure(error.message));
    yield put(showLoader(false));
  }
}

export function* fetchCurrencySearchStart() {
  yield takeLatest(
    MarketDataActionTypes.FETCH_CURRENCY_SEARCH_START,
    fetchCurrencySearchStartAsync
  );
}

export default function* cryptoMarketSagas() {
  yield all([call(fetchMarketItemsStart), call(fetchCurrencySearchStart)]);
}
