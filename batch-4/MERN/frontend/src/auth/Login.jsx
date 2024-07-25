import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../helper/baseurl";
import { Link } from "react-router-dom";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [luser, setLuser] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setLuser({ ...luser, [name]: value });
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await axios.post(`${BASE_URL}/login`, luser);
      setLoading(false);

      if (response.status == 200) {
        setMessage(response.data.message);
        localStorage.setItem("BATCH4-AUTH", response.data.authtoken);
        setTimeout(() => {
          window.location.href = "/";
        }, 500);
      }
    } catch (err) {
      setLoading(false);
      setMessage(err.response.data);
    }
  };

  const handleForgetPassword = async () => {
    setMessage("");
    try {
      const res = await axios.post(`${BASE_URL}/reset-password`, {
        email: luser.email,
      });
      if ((res.statusText = "OK")) {
        setMessage("An email has been sent");
      }
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <h2>LOGIN</h2>
        {message && <p>{message}</p>}
        {Object.keys(luser).map((el) => (
          <div key={el}>
            <label htmlFor={el}>{el.toUpperCase()}</label>
            <input
              type={el == "password" ? "password" : "email"}
              id={el}
              name={el}
              value={luser[el]}
              onChange={handleInput}
              required={el === "email"}
            />
          </div>
        ))}
        <input type="submit" value={loading ? "..." : "login"} />
      </form>
      <p style={{ cursor: "pointer" }} onClick={handleForgetPassword}>
        Forgot password
      </p>
      Need an Account ? <Link to="/signup">SIGNUP</Link>
    </div>
  );
};
