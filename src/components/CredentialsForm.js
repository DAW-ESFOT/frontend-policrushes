import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link as MuiLink } from "@material-ui/core";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import Routes from "@/constants/routes";
import { useAuth } from "@/lib/auth";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";

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
  const { checkCredentials } = useAuth();
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState(null);
  const [locked, setLocked] = useState(false);

  function Copyright() {
    const classes = useStyles();

    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <MuiLink className={classes.link} to="https://material-ui.com/">
          Responsive Creations
        </MuiLink>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  const onSubmit = async (data) => {
    setMessage(null);
    setLocked(true);
    const response = await checkCredentials(data);
    if (response.status === "success") {
      console.log("success");
      onConfirm(data);
    }
    setLocked(false);
    setMessage(response.message);
  };

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CssBaseline />
        <div className={classes.paper}>
          <div className={classes.avatar}>
            <div style={wrapper}>
              <img style={img} src="logo.jpeg"></img>
            </div>
          </div>
          <Typography component="h1" variant="h4">
            REGISTRARSE
          </Typography>

          <Typography component="h2" variant="h5">
            {/* Entrar */}
          </Typography>

          <div className={classes.form}>
            <div style={{ height: 56, margin: "0px auto" }}>
              {locked && (
                <Grid item align="center">
                  <CircularProgress color="primary" />
                </Grid>
              )}
            </div>
            {message && (
              <Alert severity={"error"}>
                <strong>{message}</strong>
              </Alert>
            )}
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
              disabled={locked}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Continuar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href={Routes.REGISTER} passHref>
                  <MuiLink className={classes.link}>
                    {"Olvidé mi contraseña"}
                  </MuiLink>
                </Link>
              </Grid>
              <Grid item>
                <Link href={Routes.LOGIN} passHref>
                  <MuiLink className={classes.link}>
                    {"Ya tengo una cuenta"}
                  </MuiLink>
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </form>
    </Container>
  );
}
