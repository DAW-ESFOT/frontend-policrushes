import React, { useState } from "react";
import CredentialsForm from "../components/CredentialsForm";
import PreferencesForm from "../components/PreferencesForm";

export default function Register() {
  const [step, setStep] = useState("credentials");
  const [credentials, setCredentials] = useState(null);

  const switchScreen = () => {
    const newStep = step === "credentials" ? "preferences" : "credentials";
    setStep(newStep);
  };

  return (
    <>
      {step === "credentials" ? (
        <CredentialsForm
          credentials={credentials}
          onConfirm={(credentials) => {
            setCredentials(credentials);
            console.log("credentials:", credentials);
            switchScreen();
          }}
        />
      ) : (
        <PreferencesForm
          credentials={credentials}
          onConfirm={() => {
            switchScreen();
          }}
          onBack={() => {
            switchScreen();
          }}
        />
      )}
      <></>
    </>
  );
}
