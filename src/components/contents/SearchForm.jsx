import React, { useState, useEffect } from "react";
import { otherServices } from "../../services/otherServices";
import { Row } from "react-bootstrap";
import Card from "../Card";

function SearchForm(props) {
  const [data, setData] = useState([]);
  const foodName = data.map((e) => e.name);
  const categoryName = data.map((e) => e.category);
  const filteredData = data.filter(
    (e) =>
      e.name.includes(props.searchVal) || e.category.includes(props.searchVal)
  );
  useEffect(() => {
    otherServices
      .getAllFood()
      .then((data) => data.json())
      .then((data) => setData(data.data));
  }, []);
  const allName = categoryName + foodName;

  return (
    <>
      <div className="SearchForm">
        <div className="search-form-head">
          <span id="search-form-span-head">Хайлт</span>
          <img
            className="search-form-img"
            src={"mobile-version-icons/see more.svg"}
            alt=""
          />
          <span id="search-form-span">{props.searchVal}</span>
        </div>

        <div className="searchcard-container">
          {allName.includes(props.searchVal) ? (
            <Row className="g-3">
              {filteredData.map((data) => (
                <Card
                  name={data.name}
                  key={data._id}
                  price={data.price}
                  discount={data.discount}
                  img={data.image}
                />
              ))}
            </Row>
          ) : (
            <div className="valueNotFound">
              <img src="empty-box.png" alt="" />
              <p>Уучлаарай, илэрц </p>
              <p>олдсонгүй...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchForm;
