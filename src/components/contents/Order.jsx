import React from "react";
import {useLocation} from 'react-router-dom';
import { useState, useEffect } from "react";

import {otherServices} from "../../services/otherServices"

function Order(props) {
  const [data, setData] = useState([])
  const location = useLocation();
  useEffect(() => {
    otherServices.getAllFood().then(data => data.json()).then(data => setData(data.data))
  }, [])
  const certainItem = location.state.name;
  const filteredData = data.filter(e => e.name.includes(certainItem))
  const foodName = data.map(e => e.name)
  console.log(filteredData);
  const [count, setCount] = useState(1)
  return (
    <div className="order-container">
      <div className="order-img-div">
      <img
      className="order-img"
      src={`https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com${filteredData.map(e => e.image)}`}
      alt="???"/>
      </div>
      <div className="order-upper-div">
        <h6>{filteredData.map(e => e.name)}</h6>
        <span>{filteredData.map(e => e.price)}₮</span>
      </div>
      <div className="order-middle-div">
        <span>Орц</span>

        <p>{filteredData.map(e => e.ingredients)}</p>
      </div>
        <span className="order-num">Тоо</span>
      <div className="count">
        <button onClick={()=> {setCount(count - 1)}}>-</button>
        <div className="displayer">{count}</div>
        <button onClick={()=> {setCount(count + 1)}}>+</button>
      </div>

      <button className="order-button">Сагслах</button>
      
    </div> 
  );
}

export default Order;
