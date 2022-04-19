import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { otherServices } from "../services/otherServices";
import "../styles/javka.css";

const Footer = () => {
  // otherServices.getAllFood().then(e=>e.json()).then(e=>console.log("footer = " ,e.data))
  return (
    <>
      <div className="ftr-top-space d-none d-md-block"></div>
      <div className="bg-ftr pb-4 ftr-top-space mt-5">
        <Container>
          <Row className=" pt-4 align-items-stretch">
            <Col className="col-12 col-lg-2  d-flex mb-3 ">
              <Row className="col-md-12">
                <div className="inline-block d-flex">
                  <img className="jijig-logo " src="/images/logo.png"></img>
                  <p className="textclear  mb-0 ms-3 pt-2 text-nowrap">
                    Food Delivery
                  </p>
                </div>
              </Row>
            </Col>

            <Col className="col-12 col-lg-4 mb-3">
              <Row>
                <Col className="col-6">
                  <div className="justify-content-start">
                    <Nav.Link href="#home" className="textclear ">
                      Нүүр
                    </Nav.Link>
                    <Nav.Link href="#home" className="textclear text-nowrap">
                      Хоолны цэс
                    </Nav.Link>
                    <Nav.Link href="{}" className="textclear text-nowrap">
                      Хүргэлтийн бүс
                    </Nav.Link>
                  </div>
                </Col>

                <Col className="col-6">
                  <div className="col-md-12 text-nowrap">
                    <Nav.Link href="#home" className="textclear">
                      Холбоо барих
                    </Nav.Link>
                    <Nav.Link
                      href="Tel:(976) 77123456"
                      className="textclear-o fs-6 fw-light "
                    >
                      (976) 77123456
                    </Nav.Link>
                    <Nav.Link
                      href="Tel:(976) 77123454"
                      className="textclear-o fs-6 fw-light "
                    >
                      (976) 77123454
                    </Nav.Link>
                  </div>
                </Col>
              </Row>
            </Col>
            <Row className="footer-top d-none d-lg-block"></Row>
          </Row>
          <div className="d-flex justify-content-center d-block d-md-none ">
            <a href="https://www.facebook.com/" target={"_blank"}>
              <img src="images/facebook.png" className="p-2" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="images/instagram.png" className="p-2"></img>
            </a>
            <a href="https://www.twitter.com/">
              <img src="images/twitter.png" className="p-2"></img>
            </a>
          </div>
          <div className="line-w d-none d-md-block"></div>

          <Row className="d-flex  text-white fw-light mb-0">
            <Col className="col-12 col-md-3  flex-grow-1   pb-1">
              <div className="text-center col-6 d-none d-md-block">
                <p className="text-nowrap d-none d-md-block mb-0">
                  Бидэнтэй нэгдээрэй
                </p>
                <Col className="d-flex justify-content-center ms-3 d-none d-md-block flex-nowrap ">
                  <a href="https://www.facebook.com/" target={"_blank"}>
                    <img
                      src="images/facebook.png"
                      className="p-2 flex-nowrap "
                    />
                  </a>
                  <a href="https://www.instagram.com/">
                    <img
                      src="images/instagram.png"
                      className="p-2 flex-nowrap "
                    ></img>
                  </a>
                  <a href="https://www.twitter.com/">
                    <img
                      src="images/twitter.png"
                      className="p-2 flex-nowrap "
                    ></img>
                  </a>
                </Col>
              </div>
              <div className="col-6"></div>
            </Col>

            <div className="line-w d-md-none d-sm-block"></div>

            <Col className="col-12 col-md-2 col-lg-2  text-nowrap text-md-end flex-grow-1 mt-0 pb-1 mb-0">
              <p>Үйлчилгээний нөхцөл</p>
            </Col>

            <Col className="col-12 col-md-2 col-lg-2 text-nowrap text-md-end flex-grow-1  mt-0 mb-0 pb-1">
              <p>Нууцлалын бодлого</p>
            </Col>

            <Col className="col-12  col-lg-3 text-end flex-grove-1 d-none d-lg-block text-nowrap">
              <p className="mb-0">© 2020 MStars Foods LLC</p>
            </Col>
          </Row>
          <Row>
            <Col className=" text-white fw-light">
              <p className="mb-0  text-end col-lg-3  d-block d-lg-none text-nowrap">
                © 2020 MStars Foods LLC
              </p>

              <p className="text-end text-nowrap mb-1 d-none d-md-block">
                Зохиогчийн эрх хуулиар хамгаалагдсан.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Footer;
