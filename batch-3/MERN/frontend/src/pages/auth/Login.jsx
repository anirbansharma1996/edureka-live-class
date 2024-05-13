import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../api/baseurl";
import "./auth.css";

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [mailmsg, setMailmsg] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/login`, login);
      if (res.status === 200) {
        setMessage((p) => res.data.message);
        localStorage.setItem("b3-blog-auth-token", res.data.token);
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      setMessage((p) => error.response.data);
    }
  };

  const handleForget = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/reset-password`, {
        email: login.email,
      });
      if (res.data.status) {
        setMailmsg("No user found");
      } else {
        setMailmsg("A link has been sent to your email address");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <form className="login-form" onSubmit={handleSubmit}>
        <p>{message}</p>
        {mailmsg && <p>{mailmsg}</p>}
        <label>EMAIL</label>
        <input
          type="email"
          name="email"
          value={login.email}
          onChange={handleInput}
        />
        <label>PASSWORD</label>
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={handleInput}
        />
        <h5
          onClick={handleForget}
          style={{ textAlign: "end", cursor: "pointer" }}
        >
          forgot password
        </h5>
        <input type="submit" value="LOGIN" />
        <a href="/signup">SIGNUP</a>
      </form>
    </div>
  );
}
