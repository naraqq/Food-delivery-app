import Card from "./Card";
import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

export default function Menu() {
  const [data, setData] = useState([]);
  const [filteredFood, setFilteredFood] = useState([]);
  useEffect(() => {
    fetch("https://dev-api.mstars.mn/api/foods")
      .then((data) => data.json())
      .then((data) => {
        setData(data.data);
        setFilteredFood(
          data.data.filter((data) => data.category === "Үндсэн хоол")
        );
      });
  }, []);
  function filterHandler(e) {
    let btns = document.querySelectorAll(".menu-filter-btn");

    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.remove("menu-filter-btn-active");
    }
    // e.target.classList.remove('menu-filter-btn-active')
    setFilteredFood(
      e.target.value === "Хямдралтай"
        ? data.filter((data) => data.discount > 0)
        : data.filter((data) => data.category === e.target.value)
    );
  }
  return (
    <div className="menu-container">
      <div className="menu-filter-btn-container" variant="pills">
        <button
          className="menu-filter-btn menu-filter-btn-active"
          onClick={filterHandler}
          value={"Үндсэн хоол"}
        >
          Үндсэн хоол
        </button>
        <button
          className="menu-filter-btn"
          onClick={filterHandler}
          value={"Салад ба зууш"}
        >
          Салад ба зууш
        </button>
        <button
          className="menu-filter-btn"
          onClick={filterHandler}
          value={"Амттан"}
        >
          Амттан
        </button>
        <button
          className="menu-filter-btn"
          onClick={filterHandler}
          value={"Хямдралтай"}
        >
          Хямдралтай
        </button>
      </div>

      <div>
        <Row className="g-3">
          {filteredFood.map((data) => (
            <Card
              name={data.name}
              key={data._id}
              price={data.price}
              discount={data.discount}
              img={data.image}
            />
          ))}
        </Row>
      </div>
    </div>
  );
}
