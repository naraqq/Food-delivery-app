import { createContext, useState, useContext, useEffect } from "react";

export const UserContext = createContext({});

export function useUser() {
  return useContext(UserContext);
}

export const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const [signUpUsers, setSignUp] = useState({});
  useEffect(() => {
    if (localStorage.getItem("info")) {
      const data = JSON.parse(localStorage.getItem("info"));
      setUser({
        userName: data.userName,
        email: data.email,
        password: data.password,
        id: data.id,
        address: data.address,
      });
    } else if (localStorage.getItem("data")) {
      const data = JSON.parse(localStorage.getItem("data"));
      setSignUp({
        userName: data.data,
      });
    }
  });
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
