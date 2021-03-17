import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import {Button, Link as MuiLink, TextField} from "@material-ui/core";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "@/lib/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import Routes from "../../constants/routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

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
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
const ResetPasswordPage = () => {
    const router = useRouter();
    const { token } = router.query;
    const { confirmPasswordReset } = useAuth();
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

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

    const onResetPassword = async ({
                                       email,
                                       password,
                                       password_confirmation,
                                   }) => {
        try {
            setLoading(true);
            await confirmPasswordReset(email, password, password_confirmation, token);
            setLoading(false);
            enqueueSnackbar(
                "Tu clave se ha restablecido correctamente, puedes iniciar sesión",
                {
                    variant: "success",
                }
            );
            router.push(Routes.LOGIN);
        } catch (error) {
            setLoading(false);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                enqueueSnackbar(error.response.data.status, { variant: "error" });

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
                enqueueSnackbar("Ocurrió un error desconocido.", {
                    variant: "error",
                });
            }
            console.log(error.config);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <form onSubmit={handleSubmit(onResetPassword)}>
                <CssBaseline />
                <div className={classes.paper}>
                    <div className={classes.avatar}>
                        <div style={wrapper}>
                            <img style={img} src="../logo.jpeg"></img>
                        </div>
                    </div>
                    <Typography component="h1" variant="h4">
                        Cambiar contraseña
                    </Typography>

                    <div className={classes.form}>
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
                        <TextField
                            // defaultValue={credentials ? credentials.password : ""}
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
                            error={!!errors.password}
                            helperText={errors.password?.message}
                        />
                        <TextField
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
                            error={!!errors.password_confirmation}
                            helperText={errors.password_confirmation?.message}
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
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </form>

        </Container>
    );
};

export default ResetPasswordPage;