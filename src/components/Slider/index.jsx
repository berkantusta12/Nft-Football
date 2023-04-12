import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import slider from "../../config/image/slider.png";
import slider2 from "../../config/image/slider2.png";
import slider3 from "../../config/image/slider3.png";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div className="sliderdiv">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slider} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="div"></div>
    </div>
  );
};

export { Slider };
