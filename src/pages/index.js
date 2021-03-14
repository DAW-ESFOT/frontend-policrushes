import Head from "next/head";
import styles from "../styles/Home.module.css";
import Register from "../pages/register";
import PreferencesForm from "@/components/PreferencesForm";

export default function Home() {
  return (
    <div>
      <Landing />
      <PreferencesForm />
    </div>
  );
}
