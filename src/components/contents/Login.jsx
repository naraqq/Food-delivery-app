import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userServices } from "../../services/userService";
import { toast } from "react-toastify";
import Footer from "../Footer";

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

  function handleSubmit(e) {
    e.preventDefault();
    userServices
      .loginUser({
        email: e.target[0].value,
        password: e.target[1].value,
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          localStorage.setItem("user", JSON.stringify(data.data));
          localStorage.setItem("token", JSON.stringify(data.token));
          redirect();
        } else {
          toast.error("Нууц үг эсвэл email хаяг буруу байна!", {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((err) => {
        toast.error("Server-тэй холбогдход алдаа гарлаа!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }
  function redirect() {
    navigate("/", { state: "ok" });
    window.location.reload(true);
  }

  return (
    <>
      <div className="ProfileContainer">
        <div className="ProfileContainer-div">
          <h3>нэвтрэх</h3>
          <form action="" onSubmit={handleSubmit}>
            <h4>И-мэйл</h4>
            <input
              type="email"
              placeholder="И-мэйл хаягаа оруулна уу. "
              autoFocus
            />
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
      <Footer />
    </>
  );
}

export default Login;
