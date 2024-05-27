import React, { useState, useContext } from "react";
import { TokenContext } from "../../context/Authcontext";
import "./navbar.css";

export default function Navbar() {
  const { decode } = useContext(TokenContext);

  return (
    <nav>
      <div className="nav-logo">
        <h1>IdeaInk</h1>
      </div>
      <div className="nav-info">
        <a href={"/"}>
          <h3>Blogs</h3>
        </a>
        &nbsp;&nbsp;
        {decode ? (
          <a href={"/user"}>
           <img width={'40px'}  src={decode?.image || "https://t4.ftcdn.net/jpg/05/42/36/11/360_F_542361185_VFRJWpR2FH5OiAEVveWO7oZnfSccZfD3.jpg" } alt={decode?.name} />
          </a>
        ) : (
          <a href={"/login"}>
            <h3>Login</h3>
          </a>
        )}
      </div>
    </nav>
  );
}
