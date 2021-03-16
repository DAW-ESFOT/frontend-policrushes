import React, { useEffect } from "react";
import { useAuth } from "@/lib/auth";
import { useRouter } from "next/router";
import Routes from "@/constants/routes";

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    router.push(user ? Routes.HOME : Routes.LANDING);
  }, []);
  return <></>;
}
