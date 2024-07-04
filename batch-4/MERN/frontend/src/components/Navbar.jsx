import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const { user } = useContext(AuthContext);

  const navlink = [
    { page: "Home", path: "/" },
    { page: user ? "Write Blog" : "", path: user ? "/write-blog" : "/login" },
    { page: user ? user.username : "Login", path: user ? "/user" : "/login" },
  ];

  return (
    <div>
      <nav style={{ display: "flex", justifyContent: "space-evenly" }}>
        {navlink.map((el) => (
          <div key={el.path}>
            <Link to={el.path}>{el.page}</Link>
          </div>
        ))}
      </nav>
    </div>
  );
};
