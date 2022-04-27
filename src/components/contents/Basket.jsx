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
  let amount = 0
  let filteredData = data.filter(e => e.name.includes(orderedItem))
  const totalPrice = filteredData.map((e) => e.price);
  for(let i = 0; i < filteredData.length; i++) {
    amount += parseInt(totalPrice[i])
  }
  let total = amount * count

  return (
    <div className="basket-container">
      <h6>МИНИЙ САГС</h6>
      <div className="meal-container">
        {filteredData.map((data) => (
          <BasketItem
            name={data.name}
            key={data._id}
            price={data.price}
            discount={data.discount}
            img={data.image}
            count={count}
          />
        ))}
      </div>
      <div className="lower-container">
        <p>Нийт: {total}₮</p>
      </div>
      <button>Захиалах</button>
    </div>
  );
}

export default Basket;
