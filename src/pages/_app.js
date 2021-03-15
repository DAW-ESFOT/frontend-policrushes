import "../styles/globals.css";
import React from "react";
//tema personalizado
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { AuthProvider } from "@/lib/auth";
import { SnackbarProvider } from "notistack";


//tema global
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#D37586",
      light: "rgb(72, 72, 212)",
      dark: "pink",
      contrastText: "#fff",
    },
    secondary: {
      main: "rgb(95	99	233	)",
      light: "rgb(95	99	233	)",
      dark: "rgb(95	99	233	)",
      contrastText: "#fff",
    },
    background: {
      paper: "white",
      custom: "cyan",
      default: "#FCF5F5",
    },
  },
  customlink: {
    background: "white",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
});

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
      <SnackbarProvider>
        <AuthProvider>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </AuthProvider>
      </SnackbarProvider>
  );
}

export default MyApp;
