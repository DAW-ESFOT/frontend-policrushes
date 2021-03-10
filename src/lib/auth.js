import React, { createContext, useContext, useEffect, useState } from "react";
import { BatteryAlert } from "@material-ui/icons";
import { api, publicApi } from "./api";
import cookie from "js-cookie";
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
      cookie.set("auth", true, {
        expires: 1, // dia
      });
      console.log("logged user:", user);

      return user;
    } else {
      // no tengo sesión activa
      setUser(false);
      cookie.remove("auth");
      return false;
    }
  };

  async function login(data, onSuccess, onFail) {
    try {
      const response = await publicApi.post("/login", data);
      console.log("login response", response);
      handleUser(response.data.user);
      onSuccess(response.data.token);
      return response;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('login error data:',error.response.data);
        onFail(error.response.data);
        return error.response;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        onFail(error.response.data);
        return error.request;
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    }
  }

  async function registerUser(form_data, setMessages, setStatus) {
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
      handleUser(response.data);
      return response;
    } catch (e) {
      console.log("error response", e.response);
      const messages = e.response?.data?.messages || null;
      if (!messages) return;
      setMessages(messages);
    }
  }

  async function logout() {
    try {
      const response = await api.post("/logout");
      handleUser(false);
      return response;
    } catch (error) {}
  }

  async function getAuthenticatedUser() {
    try {
      const response = await api.get("/user", {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      console.log("auth user", response);
      handleUser(response.data);
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
    console.log("RENDER AUTH", user);
    try {
      getAuthenticatedUser();
    } catch (error) {
      console.log("NO USER");
    }
  }, [user]);

  return {
    user,
    registerUser,
    login,
    logout,
    getAuthenticatedUser,
    // sendPasswordResetEmail,
    // confirmPasswordReset
  };
}
