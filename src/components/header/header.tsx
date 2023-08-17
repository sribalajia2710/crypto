import { useForm } from "react-hook-form";
import "./header.css";
import { useDispatch } from 'react-redux'
import { fetchCurrencySearchStart, showLoader } from '../../redux/cryptoMarket/market.actions'

type FormData = {
  searchTerm: string;
};

function Header() {

  const dispatch = useDispatch();
  const handleSearch = async (symbol: string) => {
    dispatch(showLoader(true))
    dispatch(fetchCurrencySearchStart(symbol));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    handleSearch(data.searchTerm);
  };

  return (
    <div className="header">
      <div className="header-left">
        <p className="header-title">CryptoWatch</p>
      </div>
      <div className="header-right">
        <form onSubmit={handleSubmit(onSubmit)} className="form-element">
          <div className= {`search-wrapper ${errors.searchTerm ? "error" : ""}`}>
          <input
            className={`search-box ${errors.searchTerm ? "error" : ""}`}
            type="text"
            placeholder="Search currency..."
            {...register("searchTerm", {
              minLength: 3,
            })}
            autoComplete="off"
          />
          {errors.searchTerm && (
            <p className="error-text">Minimum 3 characters is required</p>
          )}
          </div>
          <button className="search-btn" type="submit" disabled={!!errors.searchTerm}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
