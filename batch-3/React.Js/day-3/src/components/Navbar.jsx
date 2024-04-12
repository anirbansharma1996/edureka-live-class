import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <h3>Anirban</h3>
      </div>

      <div className="nav-info">
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
      </div>
      <MobileNav />
    </nav>
  );
};

export default Navbar;

const MobileNav = () => {
  return (
    <>
      <div className="mobile-nav">
        <button
          className="btn btn-ghost"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          ☰
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
