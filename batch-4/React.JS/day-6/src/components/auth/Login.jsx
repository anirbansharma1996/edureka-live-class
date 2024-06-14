import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const [login, setLogin] = useState({ email: "", password: "" });
  const successs = () => toast.success("Login Successful !");
  const error = () => toast.error("Invalid credentials !");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  let user = JSON.parse(localStorage.getItem("ShopStop"));

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
  //localStorage.setItem("ShopStop", JSON.stringify(signup))
  const handleGoogleLoginSuccess = (res) => {
    const decode = res ? jwtDecode(res.credential) : null;
    const user_data = {
      username: decode.name,
      email: decode.email,
      picture: decode.picture,
    };
    successs();
    localStorage.setItem("ShopStop", JSON.stringify(user_data))
    localStorage.setItem("ShopStop-login", true);
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <GoogleOAuthProvider clientId="428831924859-vm64n0n4a48gajnflmp62v69rl341uo6.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) =>
            handleGoogleLoginSuccess(credentialResponse)
          }
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
      <br />
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
