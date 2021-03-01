import React, { useState } from "react";
import CredentialsForm from "../components/CredentialsForm";
import PreferencesForm from "../components/PreferencesForm";

export default function Register() {
  const [step, setStep] = useState("credentials");

  const handleRegister = () => {
    setStep("preferences");
  };

  return (
    <>
      {step === "credentials" ? (
        <CredentialsForm handleRegister={handleRegister} />
      ) : (
        <PreferencesForm />
      )}
    </>
  );
}
