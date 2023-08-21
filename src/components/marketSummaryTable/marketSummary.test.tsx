import '@testing-library/jest-dom';
import MarketSummaryTable from './marketSummary';
import {
    render as renderWithProvider,
    screen
  } from "../../test-utils";

describe('MarketSummaryTable Component', () => {
  const sampleMarketItems = [
    {
      "symbol": "1ECO-BTC",
      "high": "0.000004200000",
      "low": "0.000004070000",
      "volume": "143.90000000",
      "quoteVolume": "0.00059868",
      "percentChange": -3.10,
      "updatedAt": "2023-08-19T02:47:02.173Z"
    }
  ];

  it('renders table headers correctly', () => {
    renderWithProvider(<MarketSummaryTable data={sampleMarketItems} />);
    
    expect(screen.getByText(/Symbol/i)).toBeInTheDocument();
    expect(screen.getByText(/High/i)).toBeInTheDocument();
    expect(screen.getByText(/Low/i)).toBeInTheDocument();
    expect(screen.getByText(/Quote Volume/i)).toBeInTheDocument();
    expect(screen.getByText(/Percent Change \(24h\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Updated At/i)).toBeInTheDocument();
  });

  it('renders market items correctly', () => {
    renderWithProvider(<MarketSummaryTable data={sampleMarketItems} />);
    
    expect(screen.getByText('1ECO-BTC')).toBeInTheDocument();
    expect(screen.getByText('143.9000')).toBeInTheDocument();
    expect(screen.getByText('0.0006')).toBeInTheDocument();
});

  it('renders "No Data Found" when no market items are provided', () => {
    renderWithProvider(<MarketSummaryTable data={[]} />);
    
    expect(screen.getByText(/No Data Found/i)).toBeInTheDocument();
  });

});
