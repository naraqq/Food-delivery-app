import React, { useEffect, useState } from "react";

function UserProfile() {
  const [isDisabled, setisDisabled] = useState(true);

  const changeValue = () => {
    setisDisabled(!isDisabled);
  };
  const userName = localStorage.getItem("userName");
  const userNumber = localStorage.getItem("userNumber");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", e.target[0].value);
    localStorage.setItem("userNumber", e.target[1].value);
    setisDisabled(!isDisabled);
  };
  useEffect(() => {});
  return (
    <div className="user-profile-container-main">
      <div className="userprofile-container">
        <h5>ХЭРЭГЛЭГЧ</h5>
        <form className="userprofile-form" action="" onSubmit={handleSubmit}>
          <div className="userinfo-container">
            <div className="icon-cont">
              <svg
                className="userprofile-icon"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 0.53125C4.68359 0.53125 0.78125 4.43359 0.78125 9.25C0.78125 14.0664 4.68359 17.9688 9.5 17.9688C14.3164 17.9688 18.2188 14.0664 18.2188 9.25C18.2188 4.43359 14.3164 0.53125 9.5 0.53125ZM14 15.3672C12.7344 16.3164 11.1523 16.8438 9.5 16.8438C7.8125 16.8438 6.23047 16.3164 5 15.3672V14.875C5 13.6445 5.98438 12.625 7.25 12.625C7.63672 12.625 8.19922 13.0469 9.5 13.0469C10.7656 13.0469 11.3281 12.625 11.75 12.625C12.9805 12.625 14 13.6445 14 14.875V15.3672ZM15.0547 14.418C14.8086 12.7656 13.4375 11.5 11.75 11.5C11.0117 11.5 10.6602 11.9219 9.5 11.9219C8.30469 11.9219 7.95312 11.5 7.25 11.5C5.52734 11.5 4.15625 12.7656 3.91016 14.418C2.64453 13.0469 1.90625 11.2539 1.90625 9.25C1.90625 5.06641 5.28125 1.65625 9.5 1.65625C13.6836 1.65625 17.0938 5.06641 17.0938 9.25C17.0938 11.2539 16.3203 13.0469 15.0547 14.418ZM9.5 4.46875C7.77734 4.46875 6.40625 5.875 6.40625 7.5625C6.40625 9.28516 7.77734 10.6562 9.5 10.6562C11.1875 10.6562 12.5938 9.28516 12.5938 7.5625C12.5938 5.875 11.1875 4.46875 9.5 4.46875ZM9.5 9.53125C8.41016 9.53125 7.53125 8.65234 7.53125 7.5625C7.53125 6.50781 8.41016 5.59375 9.5 5.59375C10.5547 5.59375 11.4688 6.50781 11.4688 7.5625C11.4688 8.65234 10.5547 9.53125 9.5 9.53125Z"
                  fill="#F17228"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Хэрэглэгчийн нэр"
              defaultValue={userName}
              disabled={isDisabled}
              autoFocus
            />

            <svg
              className="userprofile-edit-icon"
              onClick={changeValue}
              width="18"
              height="15"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5547 1.83594L11.6641 0.945312C11.3828 0.664062 10.9844 0.5 10.6094 0.5C10.2344 0.5 9.83594 0.664062 9.55469 0.945312L7.79688 2.70312L7 3.5L1.28125 9.21875L1 11.8906C0.953125 12.2188 1.21094 12.5 1.53906 12.5C1.5625 12.5 1.58594 12.5 1.60938 12.5L4.28125 12.2188L10 6.5L10.7969 5.70312L12.5547 3.94531C13.1406 3.35938 13.1406 2.42188 12.5547 1.83594ZM3.76562 11.1406L2.19531 11.3047L2.35938 9.73438L7.77344 4.29688L8.5 3.57031L9.92969 5L9.20312 5.72656L3.76562 11.1406ZM11.7578 3.14844L10.7266 4.20312L9.29688 2.77344L10.3516 1.74219C10.4453 1.64844 10.5625 1.625 10.6094 1.625C10.6562 1.625 10.7734 1.64844 10.8672 1.74219L11.7578 2.63281C11.8984 2.77344 11.8984 3.00781 11.7578 3.14844Z"
                fill="#F17228"
              />
            </svg>
          </div>
          <div className="userinfo-container">
            <div className="icon-cont">
              <svg
                className="userprofile-icon"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7188 1.78125L12.5938 1.03125C12.125 0.9375 11.6562 1.15625 11.4688 1.59375L10 5C9.84375 5.40625 9.9375 5.875 10.2812 6.125L11.9688 7.5C10.9062 9.6875 9.15625 11.4375 6.96875 12.5L5.59375 10.8125C5.34375 10.4688 4.875 10.375 4.46875 10.5312L1.0625 12C0.65625 12.1875 0.40625 12.6562 0.5 13.0938L1.25 16.25C1.34375 16.6875 1.71875 17 2.1875 17C10.0625 17 16.5 10.625 16.5 2.71875C16.5 2.25 16.1875 1.875 15.7188 1.78125ZM2.21875 16L1.5 12.9062L4.84375 11.4688L6.71875 13.75C9.9375 12.2188 11.6875 10.4688 13.2188 7.25L10.9375 5.375L12.375 2.03125L15.4688 2.75C15.4688 10.0625 9.53125 16 2.21875 16Z"
                  fill="#F17228"
                />
              </svg>
            </div>

            <input
              type="text"
              placeholder="Утасны дугаар"
              disabled={isDisabled}
              defaultValue={userNumber}
              autoFocus
            />

            <svg
              className="userprofile-edit-icon"
              onClick={changeValue}
              width="18"
              height="15"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5547 1.83594L11.6641 0.945312C11.3828 0.664062 10.9844 0.5 10.6094 0.5C10.2344 0.5 9.83594 0.664062 9.55469 0.945312L7.79688 2.70312L7 3.5L1.28125 9.21875L1 11.8906C0.953125 12.2188 1.21094 12.5 1.53906 12.5C1.5625 12.5 1.58594 12.5 1.60938 12.5L4.28125 12.2188L10 6.5L10.7969 5.70312L12.5547 3.94531C13.1406 3.35938 13.1406 2.42188 12.5547 1.83594ZM3.76562 11.1406L2.19531 11.3047L2.35938 9.73438L7.77344 4.29688L8.5 3.57031L9.92969 5L9.20312 5.72656L3.76562 11.1406ZM11.7578 3.14844L10.7266 4.20312L9.29688 2.77344L10.3516 1.74219C10.4453 1.64844 10.5625 1.625 10.6094 1.625C10.6562 1.625 10.7734 1.64844 10.8672 1.74219L11.7578 2.63281C11.8984 2.77344 11.8984 3.00781 11.7578 3.14844Z"
                fill="#F17228"
              />
            </svg>
          </div>
          <button type="submit" className="userprofile-save-button">
            Хадгалах
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;
