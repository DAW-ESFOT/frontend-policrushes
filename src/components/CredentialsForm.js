import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";

const img = {
  width: "100%",
  heigh: "100%",
};

const wrapper = {
  width: 100,
  height: 100,
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CredentialsForm({ onConfirm, credentials }) {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  function Copyright() {
    const classes = useStyles();

    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link className={classes.link} to="https://material-ui.com/">
          Responsive Creations
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleSubmit(onConfirm)}>
        <CssBaseline />
        <div className={classes.paper}>
          <div className={classes.avatar}>
            <div style={wrapper}>
              <img style={img} src="logo.jpeg"></img>
            </div>
          </div>
          <Typography component="h1" variant="h4">
            CREAR CUENTA
          </Typography>

          <Typography component="h2" variant="h5">
            {/* Entrar */}
          </Typography>

          <div className={classes.form}>
            <TextField
              defaultValue={credentials ? credentials.email : ""}
              variant="outlined"
              margin="normal"
              inputRef={register({
                required: true,
              })}
              required
              fullWidth
              id="email"
              label="Correo"
              type="email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              defaultValue={credentials ? credentials.password : ""}
              variant="outlined"
              margin="normal"
              inputRef={register({
                required: true,
              })}
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="password"
            />
            <TextField
              defaultValue={
                credentials ? credentials.password_confirmation : ""
              }
              variant="outlined"
              margin="normal"
              inputRef={register({
                required: true,
              })}
              required
              fullWidth
              type="password"
              name="password_confirmation"
              label="Confirmar contraseña"
              id="password"
              autoComplete="password_confirmation"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Continuar
            </Button>
          </div>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </form>
    </Container>
  );
}
