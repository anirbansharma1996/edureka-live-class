import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>IKIEA</h1>
      </div>
      <ul>
        <NavLink to={"/"} style={{ color: "white", textDecoration: "none" }}>
          <li>Home</li>
        </NavLink>
        <NavLink
          to={"/products"}
          style={{ color: "white", textDecoration: "none" }}
        >
          <li>Products</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
