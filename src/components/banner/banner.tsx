import "./banner.css";
import Carousel from "../carousel/carousel";

function Banner() {
  return (
    <div className="banner">
      <div className="bannerContent">
        <div className="tagline">
          <h2 className="tagline-heading">Crypto Pulse</h2>
          <p className="tagline-text">
          Get The Crypto Market Summary In The Get Go
          </p>
        </div>
        <Carousel />
      </div>
    </div>
  );
}

export default Banner;
