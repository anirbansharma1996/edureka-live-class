import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavLink to={"/"}>
          <li>Home</li>
        </NavLink>
        <NavLink to={"/products"}>
          <li>Products</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
