import React from "react";
import styles from "../styles/landing.module.css";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  ButtonSesion: {
    position: `absolute`,
    top: `61px`,
    left: `1049px`,
    backgroundColor: `#ffffff`,
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    borderRadius: `10px`,
    border: `2px solid #000000`,
    width: `351px`,
    height: `56px`,
    fontFamily: `Roboto", sans-serif`,
    fontWeight: `400`,
    fontSize: `36px`,
    lineHeight: `22px`,
    fontStyle: `normal`,
    color: `#d57485`,
    textShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
  },
  ButtonCuenta: {
    position: `absolute`,
    top: `384px`,
    left: `623px`,
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)0px 4px 4px rgba(0, 0, 0, 0.25)0px 4px 4px rgba(0, 0, 0, 0.25)0px 4px 4px rgba(0, 0, 0, 0.25)0px 4px 4px rgba(0, 0, 0, 0.25)`,
    borderRadius: `30px`,
    width: `314px`,
    height: `76px`,
    fontFamily: `Fredoka One", cursive`,
    fontWeight: `400`,
    fontSize: `24px`,
    lineHeight: `22px`,
    fontStyle: `normal`,
    color: `#ffffff`,
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <Container fixed>
      <div>
        <img
          style={{
            position: `absolute`,
            top: `0`,
            left: `0`,
          }}
          src="/people.png"
          alt="Cita"
        />
        <img src="/logo.png" alt="Poli Logo" className={styles.logopoli} />
        <p className={styles.ppoli}>poliCrush</p>
        <Button
          className={classes.ButtonCuenta}
          color="primary"
          variant="contained"
        >
          CREAR UNA CUENTA
        </Button>
        <Button className={classes.ButtonSesion}>Iniciar Sesion</Button>
        <img
          style={{
            position: `absolute`,
            top: `921px`,
            left: `26px`,
          }}
          src="/hearts.png"
          alt="Corazones"
        />
        <p className={styles.pinfo}>
          ¡Atención, solteros y solteras!: si buscas el amor, quieres salir con
          gente nueva o solo tener algo casual, tienes que estar en poliCrush.
          <br />
          La verdad es que hoy en día las relaciones son muy diferentes, ya que
          la mayoría de las personas se conocen por internet. No importa si eres
          heterosexual o parte de la comunidad LGBTQIA, en poliCrush encontrarás
          a alguien con quien hacer química.
          <br />
          ¿Quieres empezar una relación formal? Hecho. ¿Quieres amistades
          nuevas?Con eso basta. ¿Quieres una mejor experiencia en la
          universidad? poliCrush es para ti.
        </p>
      </div>
    </Container>
  );
};

export default Landing;
