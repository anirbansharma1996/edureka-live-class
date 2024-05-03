import React, { useState } from "react";
import "./auth.css";
import axios from "axios";
import { BASE_URL } from "../../api/baseurl";

export default function Signup() {
  const [signup, setSignup] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/signup`, signup);
      console.log(res);
      if (res.status === 201) {
        setMessage((p) => res.data);
        setSignup({
          username: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <form className="signup-form" onSubmit={handleSignup}>
        <p>{message}</p>
        <label>USERNAME</label>
        <input
          type="text"
          name="username"
          value={signup.username}
          onChange={handleInput}
        />
        <label>EMAIL</label>
        <input
          type="email"
          name="email"
          value={signup.email}
          onChange={handleInput}
        />
        <label>PASSWORD</label>
        <input
          type="password"
          name="password"
          value={signup.password}
          onChange={handleInput}
        />
        <input type="submit" value={"SIGNUP"} />
        <a href="/login">LOGIN</a>
      </form>
    </div>
  );
}
