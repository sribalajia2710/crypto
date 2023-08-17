import React, { createContext, useContext, useState, ReactNode } from "react";
import { searchCurrencyBySymbol } from "./api/marketSummary";

interface MarketDataContextProps {
  children: ReactNode;
}

interface MarketData {
    symbol: string;
  high: string;
  low: string;
  volume: string;
  quoteVolume: string;
  percentChange?: number;
  updatedAt: string;
}

interface MarketDataContextValue {
  marketData: MarketData[];
  setMarketData: React.Dispatch<React.SetStateAction<MarketData[]>>;
  handleSearch: (symbol: string) => void;
}

const MarketDataContext = createContext<MarketDataContextValue | undefined>(
  undefined
);

export const useMarketData = (): MarketDataContextValue => {
  const context = useContext(MarketDataContext);
  if (!context) {
    throw new Error("useMarketData must be used within a MarketDataProvider");
  }
  return context;
};

export const MarketDataProvider: React.FC<MarketDataContextProps> = ({
  children,
}) => {
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const handleSearch = async (symbol: string) => {
    try {
      const data = await searchCurrencyBySymbol(symbol);
      setMarketData([data]);
    } catch (error) {
      console.error("Error fetching market summary:", error);
      setMarketData([]);
    }
  };

  const value: MarketDataContextValue = {
    marketData,
    setMarketData,
    handleSearch,
  };

  return (
    <MarketDataContext.Provider value={value}>
      {children}
    </MarketDataContext.Provider>
  );
};
