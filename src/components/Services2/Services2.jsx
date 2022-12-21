import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "./Services2.css";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { useRef } from "react";

export default function Services2() {
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
          dots: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container fluid="md" className="serv2Container">
      <div className="outerServ2Slider">
        <div className="serv2SliderTitle">
          <span>All inclusive tours, Bags bharo Cabs Karo!</span>
        </div>

        <div className="Serv2sliderControls">
          <div onClick={() => slider?.current?.slickPrev()}>
            <TfiAngleLeft className="serv2siderbtn" />
          </div>
          <div className="mainServ2slider">
            <Slider {...settings} ref={slider}>
              <div className="serv2slides">
                <div className="innerserv2slide">
                  <img src="homeless.png" alt="" />
                  <h5>Accommodation</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>

              <div className="serv2slides">
                <div className="innerserv2slide">
                  <img src="flags.png" alt="" />
                  <h5>Tour Managers</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>

              <div className="serv2slides">
                <div className="innerserv2slide">
                  <img src="research.png" alt="" />
                  <h5>Best Value Itinerary</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>

              <div className="serv2slides">
                <div className="innerserv2slide">
                  <img src="fried-rice.png" alt="" />
                  <h5>All Meals</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>

              <div className="serv2slides">
                <div className="innerserv2slide">
                  <img src="touring.png" alt="" />
                  <h5>On-Tour Transport</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>

              <div className="serv2slides">
                <div className="innerserv2slide">
                  <img src="fly.png" alt="" />
                  <h5>To and from airfare</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                </div>
              </div>
            </Slider>
          </div>
          <div onClick={() => slider?.current?.slickNext()}>
            <TfiAngleRight className="serv2siderbtn" />
          </div>
        </div>
        
      </div>
    </Container>
  );
}
