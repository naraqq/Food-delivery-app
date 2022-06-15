import React from "react";
import BasketItem from "./sub-contents/BasketItem";

function MainBasket() {
  const raw = localStorage.getItem("basket");
  const data = JSON.parse(raw);
  let quantity = 0;
  let total = 0;
  if (data) {
    quantity = data.quantity;
    total = quantity * data.price;
  }

  return (
    <div className="main-basket">
      <div className="basket-container-b">
        <h6>МИНИЙ САГС</h6>
        <div className="meal-container-b">
          {raw ? (
            <BasketItem
              name={data.product.name}
              key={data.product._id}
              price={data.price}
              img={data.product.img}
            />
          ) : (
            <div>Захиалга хийгдээгүй байна.</div>
          )}
        </div>
        <div className="lower-container">
          <p>Нийт: {total}₮</p>
        </div>
        <button>Захиалах</button>
      </div>
    </div>
  );
}

export default MainBasket;
