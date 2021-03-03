import React, { useState } from "react";
import CredentialsForm from "../components/CredentialsForm";
import PreferencesForm from "../components/PreferencesForm";

export default function Register() {
  const [step, setStep] = useState("credentials");

  const switchScreen = () => {
    const newStep = step == "credentials" ? "preferences" : "credentials";
    setStep(newStep);
  };

  return (
    <>
      {step === "credentials" ? (
        <CredentialsForm switchScreen={switchScreen} />
      ) : (
        <PreferencesForm switchScreen={switchScreen} />
      )}
    </>
  );
}
