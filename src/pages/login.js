import React, { useState } from "react";
import { Auth } from "../lib/auth";
import { Compatibles } from "../lib/compatibles";
import UserScreen from "../components/UserScreen";

const Login = () => {
  const [compatibles, setCompatibles] = useState([]);

  const handleLogin = async (data) => {
    try {
      const userData = await Auth.login({
        email: "ronny.cajas@epn.edu.ec",
        password: "123123",
      });

      console.log("userData", userData);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response);
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
  };

  const handleViewCompatibles = async () => {
    try {
      const compatibles = await Compatibles.get();

      console.log("compatibles", compatibles);
      setCompatibles(compatibles.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response);
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
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleViewCompatibles}>Ver compatibles</button>
      <ul>
        {compatibles.map((compatible) => {
          return <li key={compatible.id}>{compatible.name}</li>;
        })}
      </ul>
      <UserScreen />
    </div>
  );
};

export default Login;
