import React from "react";
import "./Offers.css";
import Slider from "react-slick";
import {TfiAngleLeft, TfiAngleRight} from 'react-icons/tfi'
import { useRef } from "react";
import { Link } from "react-router-dom";

function Offers() {
  const offerslider = useRef(null);
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
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,

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

<section className="p-0 offer__slider-section">
        <div className="offerImg">
          <img src="offersbg.png" alt="" />
        </div>


    <div className="offers">
    <div  className="offerSliderContainer">
        <div className="offerSliderTitle">
          <h3>Our Offers</h3>
        </div>
        
          <img src="offerstamp.png" className="offerstamp" alt="" />
        
      <div className="outerofferSlider">

        <div className="offersliderControls">
      <div className="offercontrolbtn1" onClick={()=> offerslider?.current?.slickPrev()}><TfiAngleLeft className='offersiderbtn'/></div>

        <div className="mainofferslider">
          <Slider {...settings} ref={offerslider}>
            
            <div className="offerslides">
              <div className="innerofferslide11">
                <h5>Introducing Double Guarantee on Outstation</h5>
                <hr/>
                <p>Get confirmed cab arrival else 2X money back!</p>
              </div>
              <div className="innerofferslide12">
                <div><p>Valid till: 31st Dec, 2022</p></div>
                <div className="offercardfooter1">
                  <Link to='/offers'>
                   <button className="offercardfooter1button">View Details</button>
                  </Link>
                  <p>T&C's Apply</p>
                </div>
              </div>
            </div>
            
            
            <div className="offerslides">
              <div className="innerofferslide21">
                <h5>#DealsOnWheels: BookOutStation Cabs</h5>
                <hr/>
                <p>And save up to 10%* on ypur next road trip!</p>
              </div>
              <div className="innerofferslide22">
                <div><p>Valid till: 31st Dec, 2022</p></div>
                <div className="offercardfooter2">
                <Link to='/offers'>
                   <button className="offercardfooter2button">View Details</button>
                  </Link>
                  <p>T&C's Apply</p>
                </div>
              </div>
            </div>
            
            <div className="offerslides">
              <div className="innerofferslide31">
                <h5>#OfferOnRental: Get flat 12% Cashback</h5>
                <hr/>
                <p>Make your trip and get a good flat cashbacks</p>
              </div>
              <div className="innerofferslide32">
                <div><p>Valid till: 31st Dec, 2022</p></div>
                <div className="offercardfooter3">
                <Link to='/offers'>
                   <button className="offercardfooter3button">View Details</button>
                  </Link>
                  <p>T&C's Apply</p>
                </div>
              </div>
            </div>
            
            
            

          </Slider>
        </div>
          <div className="offercontrolbtn2" onClick={()=> offerslider?.current?.slickNext()}><TfiAngleRight className='offersiderbtn'/></div>
        </div>
      </div>
    </div>

    </div>
    </section>
    );
  }
  
  export default Offers;
  