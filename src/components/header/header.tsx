import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./header.css";
import { useDispatch } from "react-redux";
import {
  fetchCurrencySearchStart,
  fetchMarketItemsStart,
  showLoader,
} from "../../redux/cryptoMarket/market.actions";

type FormData = {
  searchTerm: string;
};

function Header() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm === "") {
      dispatch(showLoader(true));
      dispatch(fetchMarketItemsStart());
    }
  }, [searchTerm]);

  const handleSearch = () => {
    dispatch(showLoader(true));
    dispatch(fetchCurrencySearchStart(searchTerm));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    trigger,
  } = useForm<FormData>();

  const onSubmit = () => {
    handleSearch();
  };

  const validateSearchTerm = (value: string) => {
    if (/^[a-zA-Z0-9-]*$/.test(value)) {
      if (value.length >= 6) {
        return true;
      } else {
        return "Minimum 6 characters is required";
      }
    } else {
      return "Use Alphanumeric & Hyphen Only";
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue("searchTerm", inputValue);
    trigger("searchTerm"); // Trigger validation
    setSearchTerm(inputValue);
  };

  return (
    <div className="header">
      <div className="header-left">
        <p className="header-title">Crypto Pulse</p>
      </div>
      <div className="header-right">
        <form onSubmit={handleSubmit(onSubmit)} className="form-element">
          <div className={`search-wrapper ${errors.searchTerm ? "error" : ""}`}>
            <input
              className={`search-box ${errors.searchTerm ? "error" : ""}`}
              type="text"
              placeholder="Search currency..."
              {...register("searchTerm", {
                validate: validateSearchTerm,
              })}
              autoComplete="off"
              onChange={handleInputChange}
              value={searchTerm}
            />
            {searchTerm && errors.searchTerm && (
              <p className="error-text">{errors.searchTerm.message}</p>
            )}
          </div>
          <button
            className="search-btn"
            type="submit"
            disabled={!!errors.searchTerm || !watch("searchTerm")}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
