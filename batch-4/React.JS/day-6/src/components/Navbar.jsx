import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoshop.jpg";
import { IoCartOutline } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
   const {isAuth,isUser} = useContext(AuthContext)
  const links = [
    { route: "/", dest: "HOME" },
    { route: "/products", dest: "PRODUCTS" },
    { route: isAuth == "true" ? "/cart":"", dest:isAuth == "true" ?  <IoCartOutline style={{fontSize:"30px"}} />:"" },
    {
      route: isAuth == "true" ? "/user" : "/login",
      dest:
        isAuth == "true" ? <DisplayUser username={isUser?.username} picture={isUser?.picture} /> : "LOGIN",
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

export function DisplayUser({ username , picture=null }) {
  let un = username.toUpperCase().split(" ")
  un= un[0][0] || un[0][0]+un[1][0]

  return <div >
    {picture ? <img style={{borderRadius:'50%'}} width={40} src={picture}/> : <p className="user-info">{un}</p>}
  </div>;
}

