import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const links = [
    {
      p_name: "Home",
      p_link: "/",
    },
    {
      p_name: "Dish Of the Day",
      p_link: "/dish-of-the-day",
    },
    {
      p_name: "Find Recipe",
      p_link: "/find-recipe",
    },
    {
      p_name: "Create An Account",
      p_link: "/register",
    },
  ];

  return (
    <nav>
      <div className="nav-logo">
        <img
          src="https://i.pinimg.com/474x/59/5f/a5/595fa5ffb3d67f62ceabaa0d9a40d1e2.jpg"
          alt="logo"
        />
        <NavLink to="/"  style={{ textDecoration: "none", color: "white" }}>
          <h1>&nbsp;FOODY</h1>
        </NavLink>
      </div>
      <div className="nav-info">
        {links.map((el) => (
          <a
            href={el.p_link}
            style={{ textDecoration: "none", color: "white" }}
          >
            <p>{el.p_name}</p>
          </a>
        ))}
      </div>
      <div className="mobile-nav">
        <button
          className="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
        >
          <i className="bi bi-list"></i>
        </button>
        <div
          className="offcanvas offcanvas-bottom"
          tabIndex="-1"
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body small">
            <p>Home</p>
            <p>Dish Of the Day</p>
            <p>Find Recipe</p>
            <p>Create An Account</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
