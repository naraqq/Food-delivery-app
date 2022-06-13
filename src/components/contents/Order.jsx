import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { otherServices } from "../../services/otherServices";

function Order(props) {
  useEffect(() => {
    otherServices
      .getAllFood()
      .then((data) => data.json())
      .then((data) => setData(data.data));
  }, []);
  const [data, setData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  let certainItem =
    // location ii state umnuh page ees navigate hiigdeegui bol null
    //baih tul default utga deer ehnii hoolig str eer bichij ogow
    location.state === null ? "Чикен рамен" : location.state.name;
  const filteredData = data.filter((e) => e.name.includes(certainItem));
  console.log(filteredData);
  const quantity = count;
  const product = filteredData;
  const price = filteredData.map((e) => e.price);
  console.log([...price]);

  const navToMealDetail = () => {
    navigate("/basket", { state: { certainItem, count } });
    localStorage.setItem(
      "basket",
      JSON.stringify({
        product,
        quantity,
        price,
      })
    );
    // localStorage.setItem("quantity", JSON.stringify(count));
  };
  return (
    <div className="order-container">
      <div className="order-img-div">
        <img
          className="order-img"
          src={`https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com${filteredData.map(
            (e) => e.image
          )}`}
          alt="???"
        />
      </div>
      <div className="order-upper-div">
        <h6>{filteredData.map((e) => e.name)}</h6>
        <span>{filteredData.map((e) => e.price)}₮</span>
      </div>
      <div className="order-middle-div">
        <span>Орц</span>

        <p>{filteredData.map((e) => e.ingredients)}</p>
      </div>
      <span className="order-num">Тоо</span>
      <div className="count">
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <div className="displayer">{count}</div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>

      <button onClick={navToMealDetail} className="order-button">
        Сагслах
      </button>
    </div>
  );
}

export default Order;
