import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

const entryPoint = document.querySelector("#root");

const root = ReactDOM.createRoot(entryPoint as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
