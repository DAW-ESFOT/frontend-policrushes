import React, { useEffect } from "react";
import withAuth from "@/hocs/withAuth";

function Home() {
  useEffect(() => {
    setInterval(() => {
      console.log("token check");
    }, 60 * 1000);
  }, []);

  return <div>home</div>;
}

export default withAuth(Home);
