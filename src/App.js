import "./Nara.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/contents/Login";
import NotFound from "./components/contents/sub-contents/NotFound";
import RegisterForm from "./components/contents/RegisterForm";
import ForgotPassword from "./components/ForgotPassword";
import DeliveryZone from "./components/DeliveryZone";
import Menu from "./components/Menu";
import SearchForm from "./components/contents/SearchForm";
import UserProfile from "./components/contents/UserProfile";
import Order from "./components/contents/Order";
import Basket from "./components/contents/Basket";
import Terms from "./components/contents/sub-contents/TermsAndCondition";

function App() {
  const [searchParam, setSearchParam] = useState("");

  return (
    <div>
      <BrowserRouter>
        <Header searchVal={setSearchParam} />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/menu/*" element={<Menu />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path="/delivery" element={<DeliveryZone />}></Route>
          <Route path="/userprofile" element={<UserProfile />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
          <Route
            path="/search/*"
            element={<SearchForm searchVal={searchParam} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
