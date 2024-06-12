import React from "react";
import logo from "../assets/logoshop.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-main">
        <img width={100} src={logo} alt="" />
        <h2>ShopStop</h2>
      </div>
      <div>
        <FaFacebook />&nbsp;&nbsp;&nbsp;
        <FaXTwitter />&nbsp;&nbsp;&nbsp;
        <BsInstagram />
      </div>
      <p>+91 70090 01000</p>
      <hr />
      ShopStop | IN &copy; shopstop@support.com
    </div>
  );
}
