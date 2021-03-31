import React, { useEffect } from "react";
import withAuth from "@/hocs/withAuth";
import { useAuth } from "@/lib/auth";
import UserCompatible from "../components/UserCompatible";
import UserInfo from "../components/UserCompatible";
import Button from "@material-ui/core/Button";

function Home() {
  const { logout } = useAuth();
  useEffect(() => {
    setInterval(() => {
      console.log("token check");
    }, 60 * 1000);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div style={{ height: 100, width: "100%" }}>
        <Button
          onClick={() => {
            logout();
          }}
        >
          logout
        </Button>
      </div>
      <div
        style={{
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div>home</div>
      </div>
    </div>
  );
}

export default withAuth(Home);
