import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const links = [
    { route: "/", dest: "HOME" },
    { route: "/products", dest: "PRODUCTS" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "20px 0",
      }}
    >
      {links?.map((el) => (
        <NavLink
          key={el.route}
          to={el.route}
          style={{ textDecoration: "none" }}
        >
          {el.dest}
        </NavLink>
      ))}
    </div>
  );
}
