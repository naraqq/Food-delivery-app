import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userServices } from "../../services/userService";

function Login() {
  const navigate = useNavigate();

  const [imgElement, setImageElement] = useState(true);
  const [visible, setVisible] = useState(false);
  const imgToggler = () => {
    setImageElement(!imgElement);
    setVisible(!visible);
  };
  const navToForgotPassword = () => {
    navigate({
      pathname: "/forgotPassword",
    });
  };
  const navToResigterForm = () => {
    navigate({
      pathname: "/register",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    userServices
      .loginUser({
        email: e.target[0].value,
        password: e.target[1].value,
      })
      .then((res) => res.json())
      .then((data) => localStorage.setItem("data", data.data.name));
    if (localStorage.getItem("data")) {
      navigate({
        pathname: "/",
      });
    }
  };

  return (
    <div className="ProfileContainer">
      <div className="ProfileContainer-div">
        <h3>нэвтрэх</h3>
        <form action="" onSubmit={handleSubmit}>
          <h4>И-мэйл</h4>
          <input type="email" placeholder="И-мэйл хаягаа оруулна уу. " />
          <h4>Нууц үг</h4>
          <div className="input-div">
            <input
              type={visible === true ? "text" : "password"}
              placeholder="Нууц үгээ оруулна уу. "
            />
            <button
              type="button"
              className="input-div-button"
              onClick={imgToggler}
            >
              {imgElement === true ? (
                <img
                  className="input-div-img"
                  src="images/input-eyes.svg"
                  alt=""
                />
              ) : (
                <img
                  className="input-div-img2"
                  src="images/eye_slash.svg"
                  alt=""
                />
              )}
            </button>
          </div>
          <div className="profile-form-text">
            <a onClick={navToForgotPassword} href="www.notfound.com">
              Нууц үгээ мартсан уу.
            </a>
          </div>
          <button className="profileContainer-button" type="submit">
            НЭВТРЭХ
          </button>
        </form>

        <p>эсвэл</p>
        <button
          onClick={navToResigterForm}
          className="profileContainer-button"
          type="submit"
        >
          БҮРТГҮҮЛЭХ
        </button>
      </div>
    </div>
  );
}

export default Login;
