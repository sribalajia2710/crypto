import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './carousel.css'
import imageUsdt from '../../assets/usdt.png';
import imageEth from '../../assets/eth.png';
import imageBtc from '../../assets/btc.png';
import imageUsd from '../../assets/usd.png';

const Carousel: React.FC = () => {
    const images = [
        { src: imageUsdt, label: 'USDT' },
        { src: imageEth, label: 'ETH' },
        { src: imageBtc, label: 'BTC' },
        { src: imageUsd, label: 'USD' },
      ];
    
      const items = images.map((image, index) => (
        <div key={index} className="carousel">
          <img src={image.src} alt={`Image ${index + 1}`} />
          <p className="image-label">{image.label}</p>
        </div>
      ));

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className="carousel-container">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default Carousel;
