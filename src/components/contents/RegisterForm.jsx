import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { userServices } from "../../services/userService";
import Footer from "../Footer";
import { toast } from "react-toastify";

function RegisterForm() {
  const [trigger, setTrigger] = useState(false);
  const [passwordIconShow, setPasswordIconShow] = useState(false);
  const [passwordIconHide, setPasswordIconHide] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const [passwordHide, setPasswordHide] = useState(false);

  let changeCheckboxClass = () => {
    setTrigger((trigger) => !trigger);
  };

  const iconToggle = () => {
    setPasswordIconShow(!passwordIconShow);
    setPasswordShow(!passwordShow);
  };
  const iconToggle2 = () => {
    setPasswordIconHide(!passwordIconHide);
    setPasswordHide(!passwordHide);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[3].value === e.target[5].value) {
      if (trigger) {
        navigate({
          pathname: "/login",
        });
        userServices
          .signUpUser({
            email: e.target[1].value,
            password: e.target[5].value,
            name: e.target[0].value,
            address: e.target[2].value,
          })
          .then((data) => console.log(data));
      } else {
        toast.error("Бүртгүүлхийн тулд үйлчилгээний нөхцлийг зөвшөөрнө үү!", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.error("Нууц үг зөрүүтэй тул бүртгэх боломжгүй байна.!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <div className="registerForm">
        <div className="registerForm-container">
          <span className="headerSpan">Бүртгүүлэх</span>
          <form action="" onSubmit={handleSubmit}>
            <span>Нэр</span>
            <input
              className="form-input"
              type="text"
              placeholder="Нэрээ оруулна уу. "
            />
            <span>И-мэйл</span>
            <input
              className="form-input"
              type="email"
              placeholder="И-мэйл хаягаа оруулна уу. "
            />
            <span>Хаяг</span>
            <input
              className="form-input"
              type="text"
              placeholder="Хаягаа оруулна уу. "
            />
            <div className="form-icon-container">
              <span>Нууц үг</span>
              <input
                className="form-input"
                type={passwordShow ? "text" : "password"}
                placeholder="Нууц үгээ оруулна уу. "
              />
              <button
                className="icon-button-position"
                type="button"
                onClick={iconToggle}
              >
                {passwordIconShow === false ? (
                  <img className="img-icon-style" src="eye_active.svg" alt="" />
                ) : (
                  <img className="img-icon-style" src="eye slash.svg" alt="" />
                )}
              </button>
            </div>
            <div className="form-icon-container">
              <span>Нууц үг давтах</span>
              <input
                className="form-input"
                type={passwordHide ? "text" : "password"}
                placeholder="Нууц үгээ давтана уу. "
              />
              <button
                className="icon-button-position"
                type="button"
                onClick={iconToggle2}
              >
                {passwordIconHide === false ? (
                  <img className="img-icon-style" src="eye_active.svg" alt="" />
                ) : (
                  <img className="img-icon-style" src="eye slash.svg" alt="" />
                )}
              </button>
            </div>
            <div className="form-anchor">
              <button
                id="btn-check"
                onClick={changeCheckboxClass}
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className={
                    trigger === true
                      ? "button-check-passwordShow"
                      : "button-check"
                  }
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </button>
              <NavLink to="/terms">Үйлчилгээний нөхцөл зөвшөөрөх</NavLink>
            </div>
            <button type="submit" className="form-main-btn">
              Бүртгүүлэх
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RegisterForm;
