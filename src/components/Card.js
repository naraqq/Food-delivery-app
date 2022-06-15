import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BasketItem from "./contents/sub-contents/BasketItem";

export default function Card(props) {
  const navigate = useNavigate();
  const name = props.name;
  const handleCard = () => {
    navigate("/order", { state: { name } });
  };
  let windowWidth = window.innerWidth;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [count, setCount] = useState(1);
  const [side, setSide] = useState(false);
  const quantity = count;
  const product = props;
  const price = props.price;
  const handleSide = () => {
    setSide(true);
    setShow(false);
    localStorage.setItem(
      "basket",
      JSON.stringify({
        product,
        quantity,
        price,
      })
    );
  };
  const closeSideBar = () => {
    setSide(false);
  };
  return (
    <>
      <Col md={3} xs={6}>
        <div
          className="card-container"
          onClick={windowWidth < 400 ? handleCard : handleShow}
        >
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

      {show === true ? (
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          className="modal-con"
          onHide={handleClose}
        >
          <div className="my-modal">
            <div className="modal-left">
              <img
                className="modal-img"
                src={`https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com${props.img}`}
                alt="foodImg"
              />
            </div>
            <div className="modal-right">
              <div className="modal-right-top">
                <div className="modal-title">
                  <span className="span-title">{props.name}</span>
                  <span className="span-price">{props.price}₮</span>
                </div>
                <div className="orts">
                  <span className="span-title">Орц</span>
                  <div className="orts-div">{props.ingredients}</div>
                </div>
              </div>
              <div className="modal-right-bottom">
                <div className="modal-right-bottom-t">
                  <span className="span-title">Тоо</span>
                  <div className="m-right-active-x">
                    <button
                      onClick={() => {
                        setCount(count - 1);
                      }}
                    >
                      -
                    </button>
                    <span>{count}</span>
                    <button
                      onClick={() => {
                        setCount(count + 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="modal-right-bottom-b">
                  <button
                    onClick={handleSide}
                    className="modal-right-bottom-b-btn"
                  >
                    Сагслах
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-x">
              <button className="modal-x-btn" onClick={handleClose}>
                x
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {side == true ? (
        <div className="side-bar">
          <button className="x-button-order" onClick={closeSideBar}>
            x
          </button>
          <div className="basket-container">
            <h6>МИНИЙ САГС</h6>
            <div className="meal-container">
              <BasketItem
                name={props.name}
                key={props._id}
                price={props.price}
                discount={props.discount}
                img={props.img}
                count={count}
              />
            </div>
            <div className="lower-container-b">
              <p>Нийт: {props.price}₮</p>
            </div>
            <button>Захиалах</button>
          </div>
        </div>
      ) : null}
    </>
  );
}
