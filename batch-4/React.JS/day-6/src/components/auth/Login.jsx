import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [login, setLogin] = useState({ email: "", password: "" });
  const successs = () => toast.success("Login Successful !");
  const error = () => toast.error("Invalid credentials !");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  let user = JSON.parse(localStorage.getItem("ShopStop"));
  console.log(user);
  const handleLogin = (e) => {
    e.preventDefault();
    if (login.email == user.email && login.password == user.password) {
      successs();
      localStorage.setItem("ShopStop-login", true);
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    } else {
      error();
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <label>User Email</label>
        <input
          type="email"
          onChange={handleInput}
          name="email"
          value={login.email}
        />
        <label>Password </label>
        <input
          type="password"
          name="password"
          value={login.password}
          minLength={8}
          onChange={handleInput}
        />
        <input type="submit" value={"LOGIN"} />
      </form>
      <ToastContainer />
      <p>
        Need an Account ? <Link to="/signup">Signup</Link> here
      </p>
    </div>
  );
}
