import React, { useEffect, useState } from "react";
import Cariusel_js from "./Cariusel";
import Info_panel from "./InfoPanel";
import Card from "./Card";
import { Row } from "react-bootstrap";
import { useFood } from "../contexts/FoodContext";
import { otherServices } from "../services/otherServices";
import Footer from "./Footer";

export default function Main() {
  const [cats, setCats] = useState([]);
  const [foods, setFoods] = useFood();

  useEffect(() => {
    otherServices
      .getCat()
      .then((res) => res.json())
      .then((res) => setCats(res.data));
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  function filterFoods(category_name) {
    return category_name.name === "Хямдралтай" ? (
      <div className="sale-meals">
        <div className="section-header d-flex justify-content-between">
          <h4 className="sale f20 ps-2 d-flex align-items-center">
            Хямдралтай
          </h4>
          <a href="" className="see-all">
            <span id="see-all">Бүгдийг харах </span>{" "}
            <span>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.78125 0.1875L0.15625 0.78125C0.03125 0.9375 0.03125 1.1875 0.15625 1.3125L5.8125 7L0.15625 12.6562C0.03125 12.7812 0.03125 13.0312 0.15625 13.1875L0.78125 13.7812C0.9375 13.9375 1.15625 13.9375 1.3125 13.7812L7.875 7.25C8 7.09375 8 6.875 7.875 6.71875L1.3125 0.1875C1.15625 0.03125 0.9375 0.03125 0.78125 0.1875Z"
                  fill="#F17228"
                />
              </svg>
            </span>
          </a>
        </div>
        <Row className="g-3">
          {window.innerWidth > 425
            ? foods
                .filter((data) => data.discount > 0)
                .splice(0, 4)

                .map((data, index) => (
                  <Card
                    name={data.name}
                    key={data._id}
                    price={data.price}
                    discount={data.discount}
                    img={data.image}
                  />
                ))
            : foods
                .splice(0, 2)
                .map((data, index) => (
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
    ) : (
      <div className="sale-meals">
        <div className="section-header d-flex justify-content-between">
          <h4 className="sale f20 ps-2 d-flex align-items-center">
            {category_name.name}
          </h4>
          <a href="" className="see-all">
            <span id="see-all">Бүгдийг харах </span>{" "}
            <span>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.78125 0.1875L0.15625 0.78125C0.03125 0.9375 0.03125 1.1875 0.15625 1.3125L5.8125 7L0.15625 12.6562C0.03125 12.7812 0.03125 13.0312 0.15625 13.1875L0.78125 13.7812C0.9375 13.9375 1.15625 13.9375 1.3125 13.7812L7.875 7.25C8 7.09375 8 6.875 7.875 6.71875L1.3125 0.1875C1.15625 0.03125 0.9375 0.03125 0.78125 0.1875Z"
                  fill="#F17228"
                />
              </svg>
            </span>
          </a>
        </div>
        <Row className="g-3">
          {window.innerWidth > 425
            ? foods
                .filter((data) => data.category == category_name.name)
                .splice(0, 4)
                .map((data, index) => (
                  <Card
                    name={data.name}
                    key={data._id}
                    price={data.price}
                    discount={data.discount}
                    img={data.image}
                  />
                ))
            : foods
                .filter((data) => data.category == category_name.name)
                .splice(0, 2)
                .map((data, index) => (
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
    );
  }

  return (
    <div className="main-class">
      <div className="slider">
        <Cariusel_js />
      </div>
      <div className="containera">
        <Info_panel />

        {cats.map((cat) => filterFoods(cat))}
      </div>
      <Footer />
    </div>
  );
}
