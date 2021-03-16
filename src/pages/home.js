import React, { useEffect } from "react";
import withAuth from "@/hocs/withAuth";
import { useAuth } from "@/lib/auth";

function Home() {
  const { logout } = useAuth();
  useEffect(() => {
    setInterval(() => {
      console.log("token check");
    }, 60 * 1000);
  }, []);

  return (
    <div>
      <h3>home</h3>
      <button
        onClick={() => {
          logout();
        }}
      >
        logout
      </button>
    </div>
  );
}

export default withAuth(Home);
