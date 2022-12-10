import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import "./sass/main.scss";
import { BrowserRouter } from "react-router-dom";
import GeneralState from "./context/general-context/GeneralState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GeneralState>
        <App />
      </GeneralState>
    </BrowserRouter>
  </React.StrictMode>
);
