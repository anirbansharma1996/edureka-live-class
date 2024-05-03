import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import "./navbar.css";

export default function Navbar() {
  const token = localStorage.getItem("b3-blog-auth-token") || "";
  const decode = token ? jwtDecode(token) : null;
  console.log(decode);

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
