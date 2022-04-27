import React from "react";
import ReactDOM from "react-dom";
import "./Anuujin.css";
import "./index.css";
import "./Anuujin.css";
import "./styles/javka.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nara.css";
import "./RegisterFormCSS.css";
import "./CreateProfile.css";
import FoodProvider from "./contexts/FoodContext";
import "./styles/order.css";

ReactDOM.render(
  <React.StrictMode>
    <FoodProvider>
      <App />
    </FoodProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
