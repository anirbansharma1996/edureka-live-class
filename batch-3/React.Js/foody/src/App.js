import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Allroute from "./router/Allroute";

export default function App() {
  return (
    <div>
      <Navbar />
      <Allroute />
      <Footer />
    </div>
  );
}
