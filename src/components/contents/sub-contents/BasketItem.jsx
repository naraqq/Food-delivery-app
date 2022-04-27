import React, { useState } from "react";

function BasketItem(props) {
  const [count, setCount] = useState(props.count);
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
          <button onClick={()=>{setCount(count - 1)}} className="order-button-min">-</button>
          <p className="order-span-div-min">{count}</p>
          <button onClick={()=>{setCount(count + 1)}} className="order-button-min">+</button>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;
