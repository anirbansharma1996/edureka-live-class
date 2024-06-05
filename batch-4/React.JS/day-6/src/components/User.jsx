import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function User() {
  let user = JSON.parse(localStorage.getItem("ShopStop")) || null;

  const handleLogout = () => {
    toast.warning("We will miss you !!");
    localStorage.setItem("ShopStop-login", false);
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000);
  };

  return (
    <div>
      <h1>{user?.username}</h1>
      <p>{user?.email}</p>
      <button onClick={() => handleLogout()}>LOGOUT</button>
      <ToastContainer />
    </div>
  );
}
