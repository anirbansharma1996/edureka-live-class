import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpeg";
import {Link} from 'react-router-dom'

export default function Navbar() {
  const links = [
    {
      p_name: `Home`,
      p_icon: <i className="bi bi-house"></i>,
      p_link: "/",
    },
    {
      p_name: "Products",
      p_icon: <i className="bi bi-list-task"></i>,
      p_link: "/products",
    },
    {
      p_name: (
        <span class=" position-relative">
          Cart
          <span class="position-absolute top-2 start-100 translate-middle badge rounded-pill bg-danger">
            0
          </span>
        </span>
      ),
      p_icon: <i className="bi bi-cart2"></i>,
      p_link: "/cart",
    },
    {
      p_name: "Login",
      p_icon: <i className="bi bi-person-lock"></i>,
      p_link: "/login",
    },
  ];

  return (
    <nav>
      <Link style={{color:"black"}} to="/">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
          <h3>.Shoppify</h3>
        </div>
      </Link>
      <div className="nav-info">
        {links.map((el) => (
          <a href={el.p_link}>
            <p>
              {el.p_icon} {el.p_name}
            </p>
          </a>
        ))}
      </div>
      <div
        className="mobile-nav"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <i className="bi bi-list"></i>
      </div>
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel"></h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {links.map((el) => (
            <a href={el.p_link}>
              <p>
                {el.p_icon} {el.p_name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
