import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import image from "../Images/base.png";
import banner2 from "../Images/banner2.png";
import banner3 from "../Images/banner3.png";
import meal from "../Images/meal.png";

export default function Cariusel_js() {
  return (
    <Carousel className="carousel-main">
      <Carousel.Item className="carousel-item" interval={100000}>
        <div className="container" >
          <Row className="carousel-absolute">
            <Col xs={6} lg={6}>
              <div className="images">
                <img src={meal} alt="" />
              </div>
            </Col>
            <Col xs={6} lg={6}>
              <div className="carousel-text">
                <h1 className="header-text">MStars Food delivery</h1>
                <hr />
                <p className="header-p">
                  Хосгүй амтыг хормын дотор хүргэж өгнө.
                </p>
              </div>
            </Col>
          </Row>
        </div>

        <img
          className="d-relative carousel-slide"
          src={image}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-slide"
          src={banner2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carousel-slide"
          src={banner3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
