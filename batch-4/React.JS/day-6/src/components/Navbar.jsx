import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoshop.jpg";
import { IoCartOutline } from "react-icons/io5";

export default function Navbar() {
  let isAuth = localStorage.getItem("ShopStop-login");
  let isUser = JSON.parse(localStorage.getItem("ShopStop"));
  const links = [
    { route: "/", dest: "HOME" },
    { route: "/products", dest: "PRODUCTS" },
    { route: isAuth == "true" ? "/cart":"", dest:isAuth == "true" ?  <IoCartOutline />:"" },
    {
      route: isAuth == "true" ? "/user" : "/login",
      dest:
        isAuth == "true" ? <DisplayUser props={isUser?.username} /> : "LOGIN",
    },
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

export function DisplayUser({ props }) {
  let un = props.toUpperCase().split(" ")
  un= un[0][0]+un[1][0]

  return <div className="user-info">{un}</div>;
}

