import React from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

const img = {
    width: '100%',
    heigh: '100%'
}

const wrapper = {
    width: 100,
    height: 100
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));

export default function CredentialsForm({ handleRegister }) {
    const classes = useStyles();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    function Copyright() {

        const classes = useStyles();

        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link className={classes.link} to="https://material-ui.com/">
                    Responsive Creations
          </Link>
                {' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <div className={classes.avatar}>
                    <div style={wrapper}>
                        <img style={img} src="logo.jpeg">
                        </img>
                    </div>
                </div>
                <Typography component="h1" variant="h4">
                    CREAR CUENTA
        </Typography>

                <Typography component="h2" variant="h5">
                    {/* Entrar */}
                </Typography>

                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Correo"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="passwordConfirm"
                        label="Confirmar contraseña"
                        type="passwordConfirm"
                        id="password"
                        autoComplete="confirm-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleRegister}
                    >
                        Registrarse
          </Button>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
};

CredentialsForm.propTypes = {
    handleRegister: PropTypes.func.isRequired
}