import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FoodModal from "./contents/sub-contents/FoodModal";
import { Modal, Button } from "react-bootstrap";

export default function Card(props) {
  const navigate = useNavigate();
  const name = props.name;
  const handleCard = () => {
    navigate("/order", { state: { name } });
  };
  let windowWidth = window.innerWidth;
  // console.log(windowWidth);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [count, setCount] = useState(props.count);

  return (
    <>
      <Col md={3} xs={6}>
        <div className="card-container" onClick={handleShow}>
          <div className="card-container-basket">
            <img src="images/basket_icon.png" />
            <p>Сагслах</p>
          </div>
          <div
            className="card"
            style={{ borderRadius: "20px", border: "none" }}
          >
            <div
              className="card-img-container"
              style={{ position: "relative" }}
            >
              <p
                className={
                  props.discount > 0
                    ? "card-price-discount-top-right"
                    : "card-price-discount-top-right-none"
                }
              >
                {props.discount > 0 ? `${props.discount}%` : null}
              </p>
              <div className="img-div-order">
                <img
                  src={`https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com${props.img}`}
                  alt=""
                />
              </div>
            </div>
            <div className="card-body">
              <div className="card-title">{props.name}</div>
              <div className="card-text">
                <p className="card-text-price">
                  {props.discount > 0
                    ? `${props.price * (1 - props.discount / 100)}₮`
                    : `${props.price}₮`}
                </p>

                <p className="card-text-price-discount">
                  {props.discount > 0 ? `${props.price}₮` : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Modal id="my-modal" show={show} onHide={handleClose}>
        <div>
          <div className="modal-img">
            <img
              className="order-img-side"
              src={`https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com${props.img}`}
              alt=""
            />
          </div>

          <p>{props.name}</p>
          <span>{props.price}₮</span>

          <button
            onClick={() => {
              setCount(count - 1);
            }}
            className="order-button-min"
          >
            -
          </button>
          <p className="order-span-div-min">{count}</p>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
            className="order-button-min"
          >
            +
          </button>
        </div>
        <Modal.Footer>
          <button onClick={handleClose}>x</button>
          <button onClick={handleClose}>Сагслах</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
