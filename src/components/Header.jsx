import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate, NavLink } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();

  const [Toggling, setToggling] = useState(false);
  const [headerSearch, setHeaderSearch] = useState(false);
  const [toggleToDropdown, setToggleToDropDown] = useState(false);

  const toggler = () => setToggling(!Toggling);
  const headSearchBar = () => {
    setHeaderSearch(!headerSearch);
  };
  const searchBarAppear = () => {
    setHeaderSearch(!headerSearch);
  };
  const handleSubmit = (e) => {
    navigate({
      pathname: "/search",
      search: e.target[1].value,
    });
    props.searchVal(e.target[1].value);
    e.preventDefault();
    setHeaderSearch(!headerSearch);
    setUserValue(e.target.value);
    if (Toggling === true) {
      setToggling(!Toggling);
    }
    e.currentTarget.reset();
  };
  const handleSubmitWeb = (e) => {
    navigate({
      pathname: "/search",
      search: e.target[1].value,
    });
    props.searchVal(e.target[1].value);
    e.preventDefault();
    setUserValue(e.target.value);
    e.currentTarget.reset();
  };
  const [userValue, setUserValue] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("userValue2");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  useEffect(() => {
    localStorage.setItem("userValue", JSON.stringify(userValue));
  }, [userValue]);
  const clearLocalStorage = () => {
    localStorage.clear();
    setToggleToDropDown(!toggleToDropdown);
    navigate({
      pathname: "/",
    });
  };

  const navToLogin = () => {
    navigate({
      pathname: "/login",
    });
  };
  const navToMain = () => {
    navigate({
      pathname: "/",
    });
  };
  const dropDownDisappear = () => {
    setToggling(!Toggling);
  };
  const userName = localStorage.getItem("data");

  const toggleDropdown = () => {
    setToggleToDropDown(!toggleToDropdown);
  };

  return (
    <div>
      <div className={Toggling ? "drop-down-menu" : "drop-down-menu-dis"}>
        <div className="drop-spacer"></div>
        <div className="drop-container">
          <div className="anchor-container">
            <div className="anchor-single-container">
              <div className="img-text-container">
                <div className="drop-icon">
                  <img
                    className="drop-icon-img"
                    src="mobile-version-icons/spoon_fork.svg"
                    alt=""
                  />
                </div>
                <NavLink onClick={dropDownDisappear} to="/menu">
                  Хоолны цэс
                </NavLink>{" "}
                <div className="line"></div>
              </div>
              <img src="mobile-version-icons/see more.svg" alt="" />
            </div>
            <div className="anchor-single-container">
              <div className="img-text-container">
                <div className="drop-icon">
                  <img
                    className="drop-icon-img"
                    src="mobile-version-icons/spoon_fork.svg"
                    alt=""
                  />
                </div>
                <NavLink onClick={dropDownDisappear} to="/delivery">
                  Хүргэлтийн бүс
                </NavLink>
              </div>
              <img src="mobile-version-icons/see more.svg" alt="" />
            </div>
          </div>
          <div className="anchor-container">
            <div className="anchor-single-container">
              <div className="img-text-container">
                <div className="drop-icon">
                  <img
                    className="drop-icon-img"
                    src="mobile-version-icons/spoon_fork.svg"
                    alt=""
                  />
                </div>
                <NavLink onClick={dropDownDisappear} to="/userprofile">
                  Хэрэглэгчийн мэдээлэл
                </NavLink>
                <div className="line"></div>
              </div>
              <img src="mobile-version-icons/see more.svg" alt="" />
            </div>
            <div className="anchor-single-container">
              <div className="img-text-container">
                <div className="drop-icon">
                  <img
                    className="drop-icon-img"
                    src="mobile-version-icons/spoon_fork.svg"
                    alt=""
                  />
                </div>
                <a href="">Миний захиалга</a>
              </div>
              <img src="mobile-version-icons/see more.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="spacer"></div>

      {headerSearch ? (
        // MOBILE SEARCH BAR

        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          className="switchNavbar"
        >
          <div className="switchBarContainer">
            <form
              onSubmit={handleSubmit}
              onBlur={searchBarAppear}
              className="min-input"
              action=""
            >
              <button>
                <svg
                  className="input_search_icon_min"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9062 11.4922L9.07031 8.65625C9 8.60938 8.92969 8.5625 8.85938 8.5625H8.55469C9.28125 7.71875 9.75 6.59375 9.75 5.375C9.75 2.70312 7.54688 0.5 4.875 0.5C2.17969 0.5 0 2.70312 0 5.375C0 8.07031 2.17969 10.25 4.875 10.25C6.09375 10.25 7.19531 9.80469 8.0625 9.07812V9.38281C8.0625 9.45312 8.08594 9.52344 8.13281 9.59375L10.9688 12.4297C11.0859 12.5469 11.2734 12.5469 11.3672 12.4297L11.9062 11.8906C12.0234 11.7969 12.0234 11.6094 11.9062 11.4922ZM4.875 9.125C2.78906 9.125 1.125 7.46094 1.125 5.375C1.125 3.3125 2.78906 1.625 4.875 1.625C6.9375 1.625 8.625 3.3125 8.625 5.375C8.625 7.46094 6.9375 9.125 4.875 9.125Z"
                    fill="#F17228"
                  />
                </svg>
              </button>
              <input
                onChange={(e) => setUserValue(e.target.value)}
                onSubmit={searchBarAppear}
                placeholder="Хайх"
                type="text"
              />
            </form>
          </div>
        </div>
      ) : (
        // MOBILE SEARCH BAR

        <nav className="mainNav">
          <div className="navContainer">
            <div className="toggler">
              <button onClick={toggler} type="button">
                <svg
                  id={Toggling ? "close_icon" : null}
                  className={!Toggling ? "ham-burger" : "ham-rotate"}
                  width="16"
                  height="16"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4531 2.60938C15.6641 2.60938 15.875 2.43359 15.875 2.1875V1.0625C15.875 0.851562 15.6641 0.640625 15.4531 0.640625H0.546875C0.300781 0.640625 0.125 0.851562 0.125 1.0625V2.1875C0.125 2.43359 0.300781 2.60938 0.546875 2.60938H15.4531ZM15.4531 8.23438C15.6641 8.23438 15.875 8.05859 15.875 7.8125V6.6875C15.875 6.47656 15.6641 6.26562 15.4531 6.26562H0.546875C0.300781 6.26562 0.125 6.47656 0.125 6.6875V7.8125C0.125 8.05859 0.300781 8.23438 0.546875 8.23438H15.4531ZM15.4531 13.8594C15.6641 13.8594 15.875 13.6836 15.875 13.4375V12.3125C15.875 12.1016 15.6641 11.8906 15.4531 11.8906H0.546875C0.300781 11.8906 0.125 12.1016 0.125 12.3125V13.4375C0.125 13.6836 0.300781 13.8594 0.546875 13.8594H15.4531Z"
                    fill="#F17228"
                  />
                </svg>
                <svg
                  id={!Toggling ? "close_icon" : null}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#F17228"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                  />
                </svg>
              </button>
            </div>
            <div onClick={navToMain} className="brand">
              <img className="nav_image" src="Logo.svg" alt="???" />
              <span>Food Delivery</span>
            </div>

            <div className="main-anchor-tags">
              <NavLink
                id="main-links-href-id"
                className="main-links-href "
                to="/"
              >
                НҮҮР
              </NavLink>
              <NavLink
                id="main-links-href-id"
                className="main-links-href "
                to="/menu"
              >
                ХООЛНЫ ЦЭС
              </NavLink>
              <NavLink
                id="main-links-href-id"
                className="main-links-href "
                to="/delivery"
              >
                ХҮРГЭЛТИЙН БҮС
              </NavLink>
            </div>

            {/* WEB SEARCH BAR!!!    */}
            <form onSubmit={handleSubmitWeb} className="max-input" action="">
              <button>
                <svg
                  className="input_search_icon"
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9062 11.4922L9.07031 8.65625C9 8.60938 8.92969 8.5625 8.85938 8.5625H8.55469C9.28125 7.71875 9.75 6.59375 9.75 5.375C9.75 2.70312 7.54688 0.5 4.875 0.5C2.17969 0.5 0 2.70312 0 5.375C0 8.07031 2.17969 10.25 4.875 10.25C6.09375 10.25 7.19531 9.80469 8.0625 9.07812V9.38281C8.0625 9.45312 8.08594 9.52344 8.13281 9.59375L10.9688 12.4297C11.0859 12.5469 11.2734 12.5469 11.3672 12.4297L11.9062 11.8906C12.0234 11.7969 12.0234 11.6094 11.9062 11.4922ZM4.875 9.125C2.78906 9.125 1.125 7.46094 1.125 5.375C1.125 3.3125 2.78906 1.625 4.875 1.625C6.9375 1.625 8.625 3.3125 8.625 5.375C8.625 7.46094 6.9375 9.125 4.875 9.125Z"
                    fill="#F17228"
                  />
                </svg>
              </button>
              <input
                onChange={(e) => setUserValue(e.target.value)}
                onSubmit={searchBarAppear}
                placeholder="Хайх"
                type="text"
              />
            </form>
            {/* WEB SEARCH BAR!!!    */}

            <div className="icons">
              <button onClick={headSearchBar} className="lg-dis-button">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8594 16.7383L13.6055 12.4844C13.5 12.4141 13.3945 12.3438 13.2891 12.3438H12.832C13.9219 11.0781 14.625 9.39062 14.625 7.5625C14.625 3.55469 11.3203 0.25 7.3125 0.25C3.26953 0.25 0 3.55469 0 7.5625C0 11.6055 3.26953 14.875 7.3125 14.875C9.14062 14.875 10.793 14.207 12.0938 13.1172V13.5742C12.0938 13.6797 12.1289 13.7852 12.1992 13.8906L16.4531 18.1445C16.6289 18.3203 16.9102 18.3203 17.0508 18.1445L17.8594 17.3359C18.0352 17.1953 18.0352 16.9141 17.8594 16.7383ZM7.3125 13.1875C4.18359 13.1875 1.6875 10.6914 1.6875 7.5625C1.6875 4.46875 4.18359 1.9375 7.3125 1.9375C10.4062 1.9375 12.9375 4.46875 12.9375 7.5625C12.9375 10.6914 10.4062 13.1875 7.3125 13.1875Z"
                    fill="#F17228"
                  />
                </svg>
              </button>
              <button className="md-button">
                <svg
                  className="bucket_icon"
                  width="23"
                  height="23"
                  viewBox="0 0 17 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0469 5H14.0508L10.5234 0.871094C10.2773 0.597656 9.86719 0.570312 9.59375 0.789062C9.32031 1.03516 9.29297 1.44531 9.51172 1.71875L12.3281 5H4.64453L7.46094 1.71875C7.67969 1.44531 7.65234 1.03516 7.37891 0.789062C7.10547 0.570312 6.69531 0.597656 6.44922 0.871094L2.92188 5H0.953125C0.761719 5 0.625 5.16406 0.625 5.32812V5.98438C0.625 6.17578 0.761719 6.3125 0.953125 6.3125H1.44531L2.21094 11.7539C2.29297 12.4102 2.83984 12.875 3.49609 12.875H13.4766C14.1328 12.875 14.6797 12.4102 14.7617 11.7539L15.5273 6.3125H16.0469C16.2109 6.3125 16.375 6.17578 16.375 5.98438V5.32812C16.375 5.16406 16.2109 5 16.0469 5ZM13.4766 11.5625H3.49609L2.78516 6.3125H14.1875L13.4766 11.5625ZM9.15625 7.84375C9.15625 7.48828 8.85547 7.1875 8.5 7.1875C8.11719 7.1875 7.84375 7.48828 7.84375 7.84375V10.0312C7.84375 10.4141 8.11719 10.6875 8.5 10.6875C8.85547 10.6875 9.15625 10.4141 9.15625 10.0312V7.84375ZM12.2188 7.84375C12.2188 7.48828 11.918 7.1875 11.5625 7.1875C11.1797 7.1875 10.9062 7.48828 10.9062 7.84375V10.0312C10.9062 10.4141 11.1797 10.6875 11.5625 10.6875C11.918 10.6875 12.2188 10.4141 12.2188 10.0312V7.84375ZM6.09375 7.84375C6.09375 7.48828 5.79297 7.1875 5.4375 7.1875C5.05469 7.1875 4.78125 7.48828 4.78125 7.84375V10.0312C4.78125 10.4141 5.05469 10.6875 5.4375 10.6875C5.79297 10.6875 6.09375 10.4141 6.09375 10.0312V7.84375Z"
                    fill="#F17228"
                  />
                </svg>
                <span className="bucket">Сагс</span>
              </button>
              {localStorage.getItem("data") ? (
                <button onClick={toggleDropdown}>
                  <svg
                    className="sign_in_icon"
                    width="20"
                    height="20"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.43359 9.0625C8.64062 9.0625 8.28516 9.5 7 9.5C5.6875 9.5 5.33203 9.0625 4.53906 9.0625C2.51562 9.0625 0.875 10.7305 0.875 12.7539V13.4375C0.875 14.1758 1.44922 14.75 2.1875 14.75H11.8125C12.5234 14.75 13.125 14.1758 13.125 13.4375V12.7539C13.125 10.7305 11.457 9.0625 9.43359 9.0625ZM11.8125 13.4375H2.1875V12.7539C2.1875 11.4414 3.22656 10.375 4.53906 10.375C4.94922 10.375 5.57812 10.8125 7 10.8125C8.39453 10.8125 9.02344 10.375 9.43359 10.375C10.7461 10.375 11.8125 11.4414 11.8125 12.7539V13.4375ZM7 8.625C9.16016 8.625 10.9375 6.875 10.9375 4.6875C10.9375 2.52734 9.16016 0.75 7 0.75C4.8125 0.75 3.0625 2.52734 3.0625 4.6875C3.0625 6.875 4.8125 8.625 7 8.625ZM7 2.0625C8.42188 2.0625 9.625 3.26562 9.625 4.6875C9.625 6.13672 8.42188 7.3125 7 7.3125C5.55078 7.3125 4.375 6.13672 4.375 4.6875C4.375 3.26562 5.55078 2.0625 7 2.0625Z"
                      fill="#F17228"
                    />
                  </svg>
                  <span className="sign_in_user">{userName}</span>
                </button>
              ) : (
                <button onClick={navToLogin}>
                  <svg
                    className="sign_in_icon"
                    width="20"
                    height="20"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.43359 9.0625C8.64062 9.0625 8.28516 9.5 7 9.5C5.6875 9.5 5.33203 9.0625 4.53906 9.0625C2.51562 9.0625 0.875 10.7305 0.875 12.7539V13.4375C0.875 14.1758 1.44922 14.75 2.1875 14.75H11.8125C12.5234 14.75 13.125 14.1758 13.125 13.4375V12.7539C13.125 10.7305 11.457 9.0625 9.43359 9.0625ZM11.8125 13.4375H2.1875V12.7539C2.1875 11.4414 3.22656 10.375 4.53906 10.375C4.94922 10.375 5.57812 10.8125 7 10.8125C8.39453 10.8125 9.02344 10.375 9.43359 10.375C10.7461 10.375 11.8125 11.4414 11.8125 12.7539V13.4375ZM7 8.625C9.16016 8.625 10.9375 6.875 10.9375 4.6875C10.9375 2.52734 9.16016 0.75 7 0.75C4.8125 0.75 3.0625 2.52734 3.0625 4.6875C3.0625 6.875 4.8125 8.625 7 8.625ZM7 2.0625C8.42188 2.0625 9.625 3.26562 9.625 4.6875C9.625 6.13672 8.42188 7.3125 7 7.3125C5.55078 7.3125 4.375 6.13672 4.375 4.6875C4.375 3.26562 5.55078 2.0625 7 2.0625Z"
                      fill="#F17228"
                    />
                  </svg>
                  <span className="sign_in">Нэвтрэх</span>
                </button>
              )}
              <div
                className={
                  toggleToDropdown ? "user_dropdown" : "user_dropdown_dis"
                }
              >
                <NavLink
                  onClick={() => setToggleToDropDown(!toggleToDropdown)}
                  to="/userprofile"
                >
                  Хэрэглэгчийн мэдээлэл
                </NavLink>
                <a href="">Миний захиалгууд</a>
                <button onClick={clearLocalStorage}>Гарах</button>
              </div>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Header;
