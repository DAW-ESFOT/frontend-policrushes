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

async function register(form_data) {
  publicApi
    .post("/register", form_data, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": `multipart/form-data;`,
      },
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
