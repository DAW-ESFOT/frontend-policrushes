import { api, publicApi } from "./api";

async function login(data) {
  const response = await api.post("/login", data);

  console.log("response", response);
  api.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${response.data.token}`;
  localStorage.setItem("token", response.data.token);
  return response;
}

async function register(data) {
  const { name } = data;
  publicApi
    .post("/register", {
      name,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      console.log(e);
    });
}

export const Auth = {
  login,
  register,
};
