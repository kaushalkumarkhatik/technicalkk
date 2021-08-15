import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const car1="./images/car3.jpg";
  const car2="./images/car1.jpg";
  const car3="./images/car2.jpg";
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 1,
    fade: true,
    cssEase: 'linear'
  };
  return (
    <>
  <Slider {...settings}>
      <div className="slide">
        <img src={car1} alt="image1" />
      </div>
      <div className="slide">
          <img src={car2} alt="image2"/>
      </div>
      <div className="slide">
          <img src={car3} alt="image3"/>
      </div>
    </Slider>
   
  
    < />

  );
}


export default Carousel;