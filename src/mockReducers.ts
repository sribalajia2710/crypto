const initialCryptoMarketData = {
    marketItems: [
     
    ],
    isFetching: false,
    errorMessages: [],
    showLoader: false,
  };
  
  const mockMarketDataReducer = (state = initialCryptoMarketData, action: any) => {
    return state;
  };
  
  export default mockMarketDataReducer;
  