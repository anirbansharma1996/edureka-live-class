import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.jpeg";

export default function Footer() {
  return (
    <>
      <hr />

      <footer>
        <div className="footer-logo">
          <img src={logo} alt="logo" />
          <h1>.Shoppify</h1>
        </div>
        <div className="footer-info-one">
        <dl>
            <dt>About</dt>
            <dd>About-1</dd>
            <dd>About-1</dd>
            <dd>About-1</dd>
          </dl>
        </div>
        <div className="footer-info-two">
          <dl>
            <dt>Products</dt>
            <dd>Products-1</dd>
            <dd>Products-1</dd>
            <dd>Products-1</dd>
          </dl>
        </div>
        <div className="footer-contact">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-twitter-x"></i>
        </div>
      </footer>
      <hr />
      <p style={{ textAlign: "center" }}>
        Designed & developed by <b> Anirban </b> &copy; 2024
      </p>
    </>
  );
}
