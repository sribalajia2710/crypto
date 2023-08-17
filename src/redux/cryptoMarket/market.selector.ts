import { createSelector } from '@reduxjs/toolkit'

const selectCryptoMarketData = (state: any) => state.cryptoMarketData

export const selectCryptoMarketItems = createSelector([selectCryptoMarketData], (items) => items?.marketItems)
export const selectShowLoader = createSelector([selectCryptoMarketData], (items) => items?.showLoader)
