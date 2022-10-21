import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root =
  ReactDOM.createRoot(document.getElementById("root")) ||
  document.createElement("div"); //for testing
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
