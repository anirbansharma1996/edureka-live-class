import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import TextContextProvider from "./context/TextContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TextContextProvider>
      <App />
    </TextContextProvider>
  </BrowserRouter>
);
