import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles/global";
import Home from "./pages/home";
import reportWebVitals from "./reportWebVitals";

import "./styles/colors.css";
import "./styles/fonts.css";

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
