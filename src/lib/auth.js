import React, { createContext, useContext, useEffect, useState } from "react";
import { api, publicApi } from "./api";
import Cookies from "js-cookie";
import translateMessage from "@/constants/messages";
export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

function useAuthProvider() {
  const [user, setUser] = useState(null);

  const handleUser = (user) => {
    if (user) {
      setUser(user);
      Cookies.set("token", true, {
        expires: 0.001, // dia
      });
      //tengo sesión activa
      return user;
    } else {
      // no tengo sesión activa
      setUser(false);
      Cookies.remove("token");
      return false;
    }
  };

  async function login(data) {
    try {
      const response = await publicApi.post("/login", data);
      console.log("response.data.user:", response);
      handleUser(response.data.user);
      Cookies.set("token", response.data.user.token);
      return response.data.user;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("login error data:", error.response.data);
        // onFail(error.response.data);
        return error.response;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        // onFail(error.response.data);
        return error.request;
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
      return null;
    }
  }

  async function registerUser(form_data) {
    try {
      const response = await publicApi.post("/register", form_data, {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": `multipart/form-data;`,
        },
      });
      handleUser(response.data);
      return { status: "success" };
    } catch (e) {
      if (e.response) {
        const messages = e.response?.data?.messages || null;
        return { status: "error", messages };
      }
      return { status: "error", messages: null };
    }
  }

  async function logout() {
    try {
      const response = await api.post("/logout");
      handleUser(false);
      return response;
    } catch (error) {
      handleUser(false);
    }
  }

  async function getAuthenticatedUser() {
    try {
      const token = Cookies.get("token");
      const response = await api.get("/user", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      handleUser(response.data.user);
      return response;
    } catch (error) {
      handleUser(false);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        return error.response;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  }

  useEffect(() => {
    try {
      getAuthenticatedUser();
    } catch (error) {
      console.log("NO USER");
    }
  }, []);

  return {
    user,
    registerUser,
    login,
    logout,
    getAuthenticatedUser,
  };
}
