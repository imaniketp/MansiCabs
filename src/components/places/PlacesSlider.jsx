import React from "react";
import Slider from "react-slick";
import "./PlacesSlider.css";
import {TfiAngleLeft, TfiAngleRight} from 'react-icons/tfi'
import { useRef } from "react";

function PlacesSlider() {
  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div  className="placeSliderContainer">
      <div className="outerplaceSlider">
        <div className="placeSliderTitle">
          <h5>Top Tourist Place To Visit In Maharashtra</h5>
        </div>

        <div className="sliderControls">

          <div className="controlbtns" onClick={()=> slider?.current?.slickPrev()}><TfiAngleLeft className='placesiderbtn'/><p>Previous</p></div>
        <div className="mainplaceslider">
          <Slider {...settings} ref={slider}>
            <div className="slides">
              <div className="innerslide">
                <img src="./city/nashik.jpg" alt="" />
                <h5>Nashik</h5>
              </div>
            </div>

            <div className="slides">
              <div className="innerslide">
                <img src="./city/mumbai.jpg" alt="" />
                <h5>Mumbai</h5>
              </div>
            </div>

            <div className="slides">
              <div className="innerslide">
                <img src="./city/pune.jpg" alt="" />
                <h5>Pune</h5>
              </div>
            </div>

            <div className="slides">
              <div className="innerslide">
                <img src="./city/shirdi.jpg" alt="" />
                <h5>Shirdi</h5>
              </div>
            </div>

            <div className="slides">
              <div className="innerslide">
                <img src="./city/nagpur.jpg" alt="" />
                <h5>Nagpur</h5>
              </div>
            </div>

            <div className="slides">
              <div className="innerslide">
                <img src="./city/lonavla.jpg" alt="" />
                <h5>Lonavla</h5>
              </div>
            </div>
          </Slider>
        </div>
          <div className="controlbtns" onClick={()=> slider?.current?.slickNext()}><TfiAngleRight className='placesiderbtn'/><p>Next</p></div>
        </div>
      </div>
    </div>
  );
}

export default PlacesSlider;
