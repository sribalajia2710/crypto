import "./banner.css";
import Carousel from "../carousel/ccarousel";

function Banner() {
  return (
    <div className="banner">
      <div className="bannerContent">
        <div className="tagline">
          <h2 className="tagline-heading">Crypto Pulse</h2>
          <p className="tagline-text">
          Empowering Your Trading Decisions In The Get Go
          </p>
        </div>
        <Carousel />
      </div>
    </div>
  );
}

export default Banner;
