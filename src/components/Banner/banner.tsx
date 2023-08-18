import "./Banner.css"; // Import the plain CSS file
// import Carousel from "./Carousel";

function Banner() {
  return (
    <div className="banner">
      <div className="bannerContent">
        <div className="tagline">
          <h2 className="tagline-heading">Crypto Pulse</h2>
          <p className="tagline-text">
            Get all the Info regarding your favorite Crypto Currency
          </p>
        </div>
        {/* <Carousel /> */}
      </div>
    </div>
  );
}

export default Banner;
