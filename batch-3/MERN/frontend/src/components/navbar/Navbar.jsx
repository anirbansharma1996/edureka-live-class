import React, { useState, useContext } from "react";
import { TokenContext } from "../../context/Authcontext";
import "./navbar.css";

export default function Navbar() {
  const { decode } = useContext(TokenContext);

  return (
    <nav>
      <a href={"/"}>
        <h3>Blogs</h3>
      </a>
      {decode ? (
        <a href={"/user"}>
          <h3>{decode.name}</h3>
        </a>
      ) : (
        <a href={"/login"}>
          <h3>Login</h3>
        </a>
      )}
    </nav>
  );
}
