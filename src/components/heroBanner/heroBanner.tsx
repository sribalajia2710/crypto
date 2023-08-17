import { useEffect } from "react";
import "./herobanner.css";
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

function HeroBanner() {
  const dispatch = useDispatch();
  const marketItems = useSelector(selectCryptoMarketItems);
  const loading = useSelector(selectShowLoader);

  useEffect(() => {
    dispatch(showLoader(true));
    dispatch(fetchMarketItemsStart());
  }, []);

  return (
    <div className="hero-banner">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="hero-content">
          <p>Stay Informed with Real-Time Crypto Market Updates</p>
          <div className="table-container">
            <MarketSummaryTable data={marketItems} />
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroBanner;
