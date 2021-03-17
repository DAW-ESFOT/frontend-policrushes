import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import {useForm} from "react-hook-form";
import {useAuth} from "@/lib/auth";
import Link from "@material-ui/core/Link";
import * as yup from "yup";
import { useSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    email: yup
        .string()
        .email("Ingresa un correo válido")
        .required("Ingresa tu correo electrónico"),
});

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
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function PasswordRecovery () {
    const classes = useStyles();
    const {sendPasswordResetEmail} = useAuth();
    const {enqueueSnackbar} = useSnackbar();
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSendEmail = async ({email}) => {
        setLoading(true);
        try {
            await sendPasswordResetEmail(email);
            setLoading(false);
            enqueueSnackbar(
                "Te hemos enviado un correo con instrucciones para restablecer tu clave.",
                {
                    variant: "success",
                }
            );
        } catch (error) {
            setLoading(false);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                enqueueSnackbar(error.response.data.status, {variant: "error"});

                return error.response;
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
                enqueueSnackbar("Ocurrió un error al realizar la petición.", {
                    variant: "error",
                });
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
                enqueueSnackbar("Ocurrió un error desconocido :(", {
                    variant: "error",
                });
            }
            console.log(error.config);
        }
    };

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

            <form noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit(onSendEmail)}>

                <CssBaseline/>
                <div className={classes.paper}>
                    <div className={classes.avatar}>
                        <div style={wrapper}>
                            <img style={img} src="logo.jpeg"></img>
                        </div>
                    </div>
                    <Typography component="h1" variant="h5">
                        Restablecer su contraseña
                    </Typography>

                    <Typography component="h2" variant="h5">
                        {/* Entrar */}
                    </Typography>

                        <TextField
                            // defaultValue={credentials ? credentials.email : ""}
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
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Enviar
                        </Button>
                </div>
                <Box mt={8}>
                    <Copyright/>
                </Box>
            </form>

        </Container>
    );
}