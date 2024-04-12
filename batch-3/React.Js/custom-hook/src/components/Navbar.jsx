import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Link style={{ textDecoration: "none" }} to={"/"}>
        Products
      </Link>
      <Link style={{ textDecoration: "none" }} to={"/meals"}>
       Meals
      </Link>
    </div>
  );
}
