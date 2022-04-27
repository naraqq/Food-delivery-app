import React, { useEffect, useState } from "react";
import { otherServices } from "../../../services/otherServices";

function BasketItem(props) {
  useEffect(() => {
    otherServices
      .getAllFood()
      .then((data) => data.json())
      .then((data) => setData(data.data));
  }, []);
  const [data, setData] = useState([]);
  return (
    <div className="order-box">
      <div className="order-img-containers">
        <img
          className="order-img-main"
          src={`https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com${props.img}`}
          alt=""
        />
      </div>
      <div className="order-item-containers">
        <p>{props.name}</p>
        <span>{props.price}₮</span>
        <div className="controllers">
          <button className="order-button-min">-</button>
          <p className="order-span-div-min">1</p>
          <button className="order-button-min">+</button>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;
