import React from "react";

import { Row, Col } from "react-bootstrap";
import healthy from "../Images/healthy.png";
import fast from "../Images/fast.png";
import new1 from "../Images/new.png";

export default function Info_panel() {
  return (
    <div className="info-panel p-3  bg-white">
      <Row className="info-row w-100">
        <Col sm={12} md={4} lg={4} className="info-col d-flex">
          <img src={new1} alt="" />
          <div className="text ms-3">
            <h2>Шуурхай хүргэлт</h2>
            <p>30 минутанд таны гарт.</p>
          </div>
        </Col>
        <Col sm={12} md={4} lg={4} className="info-col d-flex">
          <img src={healthy} alt="" />
          <div className="text ms-3">
            <h2>Шуурхай хүргэлт</h2>
            <p>30 минутанд таны гарт.</p>
          </div>
        </Col>
        <Col sm={12} md={4} lg={4} className="info-col d-flex">
          <img src={fast} alt="" />
          <div className="text ms-3">
            <h2>Шуурхай хүргэлт</h2>
            <p>30 минутанд таны гарт.</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
