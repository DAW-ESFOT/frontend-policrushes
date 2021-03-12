import Head from "next/head";
import styles from "../styles/Home.module.css";
import Register from "../pages/register";

//tema personalizado
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

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
export default function Home() {

  return (
    <div className={styles.container}>
      <ThemeProvider theme={theme}>
        <Register />
      </ThemeProvider>
    </div>
  );
}
