import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoshop.jpg";

export default function Navbar() {
  const links = [
    { route: "/", dest: "HOME" },
    { route: "/products", dest: "PRODUCTS" },
  ];

  return (
    <nav>
      <a href="/" style={{ textDecoration: "none", color: "white" }}>
        <div className="nav-logo">
          <img width={"60px"} height={"50px"} src={logo} alt="" />

          <h1>ShopStop</h1>
        </div>
      </a>
      <div className="nav-list">
        {links?.map((el) => (
          <NavLink
            key={el.route}
            to={el.route}
            style={{ textDecoration: "none", color: "white" }}
          >
            {el.dest}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
