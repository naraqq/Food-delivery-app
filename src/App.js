import "./Nara.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import CreateProfile from "./components/contents/CreateProfile";
import NotFound from "./components/contents/sub-contents/NotFound";
import RegisterForm from "./components/contents/RegisterForm";
import ForgotPassword from "./components/ForgotPassword";
import DeliveryZone from "./components/DeliveryZone";
import Menu from "./components/Menu"
import SearchForm from "./components/contents/SearchForm";

function App() {
  const [searchParam, setSearchParam] = useState("");
  return (
    <div>

      <BrowserRouter>
        <Header searchVal={setSearchParam} />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
          <Route path="/login" element={<CreateProfile />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path="/delivery" element={<DeliveryZone />}></Route>
          <Route path="/search/*" element={<SearchForm searchVal={searchParam} />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
