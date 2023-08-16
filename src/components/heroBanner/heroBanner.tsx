import { useEffect } from "react"
import "./herobanner.css";
import MarketSummaryTable from "../marketSummaryTable/marketSummary";
import { useMarketData } from "../../marketDataContext";
import { fetchMarketSummary } from "../../api/marketSummary";

function HeroBanner() {
  const { marketData, setMarketData } = useMarketData();

  useEffect(() => {
    fetchMarketSummary()
      .then((data) => {
        setMarketData(data);
      })
      .catch((error) => {
        console.error('Error fetching market summary:', error);
      });
  }, []);
  return (
    <div className="hero-banner">
        <div className="hero-content">
        <p>Stay Informed with Real-Time Crypto Market Updates</p>
        <div className="table-container"> {/* Add a container for market cards */}
        <MarketSummaryTable data={marketData} />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;