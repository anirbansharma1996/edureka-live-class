import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { registerContext } from "../context/registerContext";

export default function Navbar() {
  const { user } = useContext(registerContext);

  return (
    <nav>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        {user ? (
          <NavLink to="/logout">
            <li>{user}</li>
          </NavLink>
        ) : (
          <NavLink to="/register">
            <li>Register</li>
          </NavLink>
        )}
      </ul>
    </nav>
  );
}
