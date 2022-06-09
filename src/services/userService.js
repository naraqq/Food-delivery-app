const loginUser = async (credentials) => {
  return await fetch("http://localhost:5000/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: credentials.email,
      password: credentials.password,
    }),
  });
};
const signUpUser = async (credentials) => {
  return await fetch("http://localhost:5000/api/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: credentials.email,
      password: credentials.password,
      name: credentials.name,
      address: credentials.address,
    }),
  });
};
const userInfo = async (credentials) => {
  return await fetch("http://localhost:5000/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: credentials.userName,
      phoneNumber: credentials.phoneNumber,
    }),
  });
};
export const userServices = {
  signUpUser,
  loginUser,
  userInfo,
};
