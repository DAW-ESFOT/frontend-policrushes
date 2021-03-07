import { useState, useEffect } from "react";
export const usePosition = () => {
  const [position, setPosition] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [permission, setPermission] = useState("denied");

  useEffect(() => {
    navigator.permissions
      .query({ name: "geolocation" })
      .then(function (permissionStatus) {
        console.log("geolocation permission state is ", permissionStatus.state);
        permissionStatus.onchange = function () {
          console.log(
            "geolocation permission state has changed to ",
            this.state
          );
          setPermission(this.state);
        };
      });
  }, []);

  const onSuccess = (pos) => {
    var crd = pos.coords;
    setPosition({
      latitude: crd.latitude,
      longitude: crd.longitude,
    });
    console.log("Location available now");
  };

  const onError = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  const getCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  };

  useEffect(() => {
    if (permission === "prompt") {
      console.log("location icon hidden");
      if (location) return;
      getCurrentPosition();
    }

    if (permission === "denied") {
      console.log("location permission denied");
      setPosition(null);
      getCurrentPosition();
    }

    if (permission === "granted") {
      console.log("location permission granted");
      getCurrentPosition();
    }
  }, [permission]);

  return { position, errorMessage, onSuccess, onError, getCurrentPosition };
};
