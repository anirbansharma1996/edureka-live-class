import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TextContextProvider from "./context/TextContext";
import { BrowserRouter } from "react-router-dom";
import RegisterContextProvider from "./context/registerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <RegisterContextProvider>
      <TextContextProvider>
        <App />
      </TextContextProvider>
    </RegisterContextProvider>
  </BrowserRouter>
);
