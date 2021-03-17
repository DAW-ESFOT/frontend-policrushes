import React from "react";
import AlertTitle from "@material-ui/lab/AlertTitle";
import Alert from "@material-ui/lab/Alert";

export default function ErrorMessages({ messages }) {
  return (
    <>
      {messages && (
        <div>
          {Object.keys(messages).map((field) => (
            <Messages key={field} messages={messages[field]} />
          ))}
        </div>
      )}
    </>
  );
}

const Messages = ({ messages }) => {
  return (
    <>
      {messages.map((message) => (
        <Alert key={message} style={{ marginTop: 8 }} severity="error">
          <strong>{message}</strong>
        </Alert>
      ))}
    </>
  );
};
