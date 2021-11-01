// REACT
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// MATERIAL UI
import { createTheme, ThemeProvider } from "@mui/material/styles";

// COMPONENTS
import App from "./App";

// STYLING
import "./index.scss";

// AXIOS
import Axios from "axios";
import { configure } from "axios-hooks";

// Configuring Axios API baseURL
const axios = Axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

// Configuring axios-hooks with Axios config
configure({ axios });

// Configuring MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#501e96",
      contrastText: "#fff",
    },
    secondary: {
      main: "#04c9c4",
      contrastText: "#000",
    },
  },
});

// Rendering App
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
