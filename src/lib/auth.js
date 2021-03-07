import { BatteryAlert } from "@material-ui/icons";
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

async function register(form_data, setMessages, setStatus) {
  setMessages(null);
  setStatus("none");
  try {
    const response = await publicApi.post("/register", form_data, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": `multipart/form-data;`,
      },
    });

    setStatus("success");
  } catch (e) {
    console.log("error response", e.response);
    const messages = e.response?.data?.messages || null;
    if (!messages) return;
    setMessages(messages);
  }
}

export const Auth = {
  login,
  register,
};
