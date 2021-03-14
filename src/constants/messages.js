const translateMessage = (message) => {
  const messages = {
    invalid_credentials: "La combinación de usuario y clave es incorrecta.",
    not_registered: "No existe una cuenta con el correo proporcionado"
  };

  return messages[message] || message;
};
export default translateMessage;
