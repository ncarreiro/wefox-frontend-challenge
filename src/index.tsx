// REACT
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// COMPONENTS
import App from "./App";

// STYLING
import "./index.css";

// AXIOS
import Axios from "axios";
import { configure } from "axios-hooks";

// Configuring Axios API baseURL
const axios = Axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

// Configuring axios-hooks with Axios config
configure({ axios });

// Rendering App
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
