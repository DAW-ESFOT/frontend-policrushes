import React from "react";
import styles from "../styles/landing.module.css";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Routes from "@/constants/routes";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: 200,
    display: "flex",
    flexDirection: "column",
  },
  button: { height: 50, margin: "10px 0" },
}));

const Landing = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        onClick={() => {
          router.push(Routes.REGISTER);
        }}
        color="primary"
        variant="contained"
      >
        CREAR UNA CUENTA
      </Button>
      <Button
        className={classes.button}
        onClick={() => {
          router.push(Routes.LOGIN);
        }}
      >
        Iniciar Sesion
      </Button>
    </div>
  );
};

export default Landing;
