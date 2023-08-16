import { useState } from "react";
import "./header.css";
import { useMarketData } from "../../marketDataContext";


function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const { handleSearch } = useMarketData();

  const handleSearchClick = () => {
    handleSearch(searchTerm);
  };

  return (
    <div className="header">
      <div className="header-left">
        <p className="header-title">CryptoWatch</p>
      </div>
      <div className="header-right">
        <input
        className="search-box"
          type="text"
          placeholder="Search currency..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearchClick}>Search</button>
      </div>
    </div>
  );
}

export default Header;
