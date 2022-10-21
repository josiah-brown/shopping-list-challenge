import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

const root =
  ReactDOM.createRoot(document.getElementById("root")) ||
  document.createElement("div"); //for testing
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
