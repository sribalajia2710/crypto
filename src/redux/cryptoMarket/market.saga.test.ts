import { call } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import * as cryptoMarketApi from "../../api/marketSummary";
import {
  fetchMarketItemsSuccess,
  fetchCurrencySearchSuccess,
  showLoader,
} from "./market.actions";
import {
  fetchMarketItemsStartAsync,
  fetchCurrencySearchStartAsync,
} from "./market.saga.ts";
import MarketDataActionTypes from "./market.types";

describe("Market Sagas", () => {
  const marketItem = {
    symbol: "BTC",
    high: "50000",
    low: "48000",
    volume: "1000",
    quoteVolume: "10000",
    updatedAt: "2023-08-20",
  };

  it("fetchMarketItemsStartAsync - success", () => {
    return expectSaga(fetchMarketItemsStartAsync, {})
      .provide([[call(cryptoMarketApi.fetchMarketSummary), [marketItem]]])
      .put(fetchMarketItemsSuccess([marketItem]))
      .put(showLoader(false))
      .run();
  });

  it("fetchCurrencySearchStartAsync - with payload", () => {
    const action = { type: MarketDataActionTypes.FETCH_CURRENCY_SEARCH_START, payload: "BTC" };

    return expectSaga(fetchCurrencySearchStartAsync, action)
      .provide([[call(cryptoMarketApi.searchCurrencyBySymbol, "BTC"), marketItem]])
      .put(fetchCurrencySearchSuccess([marketItem]))
      .put(showLoader(false))
      .run();
  });

  it("fetchCurrencySearchStartAsync - without payload - 404", () => {
    const action = { type: MarketDataActionTypes.FETCH_CURRENCY_SEARCH_START, payload: "" };

    return expectSaga(fetchCurrencySearchStartAsync, action)
      .provide([[call(cryptoMarketApi.fetchMarketSummary), { status: 404 }]])
      .put(fetchCurrencySearchSuccess([]))
      .put(showLoader(false))
      .run();
  });

  it("fetchCurrencySearchStartAsync - without payload - success", () => {
    const action = { type: MarketDataActionTypes.FETCH_CURRENCY_SEARCH_START, payload: "" };

    return expectSaga(fetchCurrencySearchStartAsync, action)
      .provide([
        [call(cryptoMarketApi.fetchMarketSummary), [marketItem]],
        [call(cryptoMarketApi.fetchMarketSummary), { status: 200 }],
      ])
      .put(fetchCurrencySearchSuccess([marketItem]))
      .put(showLoader(false))
      .run();
  });

});
