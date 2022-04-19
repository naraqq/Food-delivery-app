import React, { useState } from "react";
import { Row, Col, Toast, toggleShowA, Button, showA } from "react-bootstrap";

import { useForm } from "react-hook-form";
import Footer from "./Footer";
import succesimg from '../Images/success.png'

export default function ForgotPassword() {
  const [showA, setShowA] = useState(false);

  const [stage, setStage] = useState(1);
  const [value, setValue] = useState("");
  const [pass, setPass] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const [isTrue, setIsTrue] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (values, e) => {
    if (stage === 3) {
      setShowA(!showA);

      if (pass == confirmPass) {
        setIsTrue(true);
      } else {
        setIsTrue(false);
      }
    } else {
      setValue(values);
      setStage(stage + 1);
    }
  };
  const handleReset = (e) => {
    e.currentTarget.reset();
  };

  let returnValue;
  switch (stage) {
    case 1:
      returnValue = (
        <div className="container-forgot">
          <div className="forgot-password">
            <div className="login_title color-o">Хэрэглэгч</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="" className="fp-label1">
                И-мэйл
              </label>

              <input
                onSubmit={handleReset}
                autoComplete="off"
                className="login_input"
                type="email"
                placeholder="И-мэйл хаягаа оруулна уу."
                {...register("email", {
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
              />
              {errors.email && errors.email.message}
              <button type="submit" className="forgotPassword-btn">
                Үргэлжлүүлэх
              </button>
            </form>
          </div>
        </div>
      );
      break;
    case 2:
      returnValue = (
        <div className="container-forgot">
          <div className="forgot-password">
            <div className="login_title color-o">Хэрэглэгч</div>
            <div>
              <div className="email-form">
                Таны ‘’<div className="email-span">{value.email} </div>’’ хаяг
                рүү нууц үг сэргээх код илгээх болно.
              </div>
              <label htmlFor="" className="fp-label1">
                Нууц үг сэргээх код
              </label>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                autoComplete="off"
                className="login_input"
                type="text"
                placeholder="Нууц үг ээ оруулна уу."
              />
              {errors.email && errors.email.message}
              <button type="submit" className="forgotPassword-btn">
                Хадгалах
              </button>
            </form>
          </div>
        </div>
      );
      break;
    case 3:
      returnValue = (
        <div className="container-forgot">
          <div className="forgot-password">
            <div className="login_title color-o">Хэрэглэгч</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="" className="fp-label1">
                Нууц үг
              </label>
              <input
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                autoComplete="off"
                className="login_input"
                type="password"
                placeholder="Нууц үг ээ оруулна уу."
              />
              <label htmlFor="" className="fp-label1">
                Нууц үг давтах
              </label>
              <input
                onChange={(e) => {
                  setConfirmPass(e.target.value);
                }}
                autoComplete="off"
                className="login_input"
                type="password"
                placeholder="Нууц үгээ давтана уу. "
              />
              <button
                type="submit"
                onSubmit={onSubmit}
                className="forgotPassword-btn"
              >
                Хадгалах
              </button>
            </form>
          </div>
        </div>
      );
  }

  return (
    <div className="container-forgot-section">
      {returnValue}

      <Toast
        show={showA}
        className="fp-toast"
        onClose={onSubmit}
        delay={2000}
        autohide
      >
        <div className="toast-img">

        <img src={succesimg} alt="" />
        </div>
        <div className="fp-text">

        {isTrue ? "Нууц үг амжилттай хадгалагдлаа." : "error"}
        </div>
      </Toast>

      <div className="fp-footer">
        <Footer />
      </div>
    </div>
  );
}
