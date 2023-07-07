import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // axios 요청을 했을때 오류를 보내주지 않거나, 대기시간이 오래 걸리는 경우 timeout을 통해 요청을 중단하고 처리할 수 있다.
  timeout: 1000 * 5,
  headers: {
    "Content-Type": "application/json",
  },
});

// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     console.log(error.response.data.error.message);
//     return Promise.reject(error.response.data.error.message);
//   }
// );

export const checkEmail = (email) => {
  return instance.post("/check", { email });
};

export const signUp = (data) => {
  const { email, username, password } = data;

  return instance.post("/join", {
    email,
    username,
    password,
  });
};

export const login = (data) => {
  const { email, password } = data;

  return instance.post("/login", {
    email,
    password,
  });
};
