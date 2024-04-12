import React, { useContext } from "react";
import { registerContext } from "../context/registerContext";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Register from "../components/Register";
import Logout from "../components/Logout";

export default function Allroutes() {
  const {user} = useContext(registerContext);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      {user ? (
        <Route path="/logout" element={<Logout />}></Route>
      ) : (
        <Route path="/register" element={<Register />}></Route>
      )}
      <Route path="*" element={<Home />}></Route>
    </Routes>
  );
}
