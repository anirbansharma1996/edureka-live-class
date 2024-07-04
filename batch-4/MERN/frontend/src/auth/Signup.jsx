import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../helper/baseurl";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [suser, setSuser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setSuser({ ...suser, [name]: value });
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await axios.post(`${BASE_URL}/signup`, suser);
      setLoading(false);
      if (response.status == 201) {
        setMessage(response.data);
        setTimeout(() => {
          window.location.href = "/login";
        }, 500);
      }
    } catch (err) {
      setLoading(false);
      setMessage(err.response.data);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <h2>SIGNUP</h2>
        {message && <p>{message}</p>}
        {Object.keys(suser).map((el) => (
          <div key={el}>
            <label htmlFor={el}>{el.toUpperCase()}</label>
            <input
              type={el == "password" ? "password" : "text"}
              id={el}
              name={el}
              value={suser[el]}
              onChange={handleInput}
            />
          </div>
        ))}
        <input type="submit" value={loading ? "..." : "signup"} />
      </form>
      Already Registered ? <Link to="/login">LOGIN</Link>
    </div>
  );
};
