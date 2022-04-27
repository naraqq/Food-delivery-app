import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { otherServices } from "../../services/otherServices";
import BasketItem from "../contents/sub-contents/BasketItem";

function Basket() {
  const location = useLocation();
  const orderedItem =
    location.state === null
      ? "Захиалга хийгдээгүй байна"
      : location.state.certainItem;
  const count = location.state === null ? "" : location.state.count;
  const [data, setData] = useState([]);

  useEffect(() => {
    otherServices
      .getAllFood()
      .then((data) => data.json())
      .then((data) => setData(data.data));
  }, []);
  const totalPrice = data.map((e) => e.price);

  console.log(typeof totalPrice);
  console.log(totalPrice);
  // console.log(count);
  // console.log(orderedItem);
  return (
    <div className="basket-container">
      <h6>МИНИЙ САГС</h6>
      <div className="meal-container">
        {data.map((data) => (
          <BasketItem
            name={data.name}
            key={data._id}
            price={data.price}
            discount={data.discount}
            img={data.image}
          />
        ))}
      </div>
      <div className="lower-container">
        <p>Нийт: 0₮</p>
      </div>
      <button>Захиалах</button>
    </div>
  );
}

export default Basket;
