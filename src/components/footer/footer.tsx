import "./footer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectShowLoader,
} from "../../redux/cryptoMarket/market.selector";

function Footer() {
  const loading = useSelector(selectShowLoader);

  return (
    <>
        {!loading && <div className="footer">
      <div className="footer-content">
        <div className="logo">
          <span>Crypto Pulse</span>
        </div>
        <div className="links">
          <Link className="header-link" to="/">
            About
          </Link>
          <Link className="header-link" to="/">
            FAQs
          </Link>
          <Link className="header-link" to="/">
            Contact us
          </Link>
          <Link className="header-link" to="/">
            Terms of Use
          </Link>
        </div>
        <p style={{ fontWeight: "bold" }}>&copy; 2023 SriBalaji &trade; All Rights Reserved</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/CryptoComOfficial/" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com/cryptocom" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/cryptocomofficial/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>}
    </>

  );
}

export default Footer;