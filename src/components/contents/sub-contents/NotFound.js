import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "../../../styles/javka.css";

function NotFound() {
  return (
    <Container className="box-size">
      <div className="">
        <div className="d-flex justify-content-center">
          <img src="computer.png" className="icon-sz" alt="" />
        </div>
        <h1 className="text-center fw-bold ">404</h1>
        <p className="fs-4 text-black-50 text-center">Not found</p>
      </div>
    </Container>
  );
}

export default NotFound;
