import { useEffect } from "react";
import "./homePage.css";
import MarketSummaryTable from "../marketSummaryTable/marketSummary";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMarketItemsStart,
  showLoader,
} from "../../redux/cryptoMarket/market.actions";
import {
  selectCryptoMarketItems,
  selectShowLoader,
} from "../../redux/cryptoMarket/market.selector";
import Banner from "../banner/banner";

function HomePage() {
  const dispatch = useDispatch();
  const marketItems = useSelector(selectCryptoMarketItems);
  const loading = useSelector(selectShowLoader);

  useEffect(() => {
    dispatch(showLoader(true));
    dispatch(fetchMarketItemsStart());
  }, []);

  return (
    <div className="home-page">
      {loading ? (
        <div className="loader-container">
          <div className="spinner" data-testid="loading-spinner"></div>
        </div>
      ) : (
        <div className="home-page-content">
          <Banner/>
          <div className="table-container" data-testid="market-summary-table">
            <MarketSummaryTable data={marketItems} />
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
