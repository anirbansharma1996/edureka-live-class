import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../api/baseurl";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "./auth.css";
import { jwtDecode } from "jwt-decode";

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
  //GOOGLE AUTH
  const handleLoginSuccess = async (res) => {
    try {
      const decode = jwtDecode(res.credential);
      console.log(decode)
      const response = await axios.post(`${BASE_URL}/google-login`, decode);
      console.log(response)
      if (response.status == 200) {
        localStorage.setItem("b3-blog-auth-token", response.data.token);
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      }
    } catch (error) {
      setMessage("something went wrong ...", error.message);
    }
  };
  const handleLoginError = (error) => {
    setMessage(error);
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <form className="login-form" onSubmit={handleSubmit}>
        {mailmsg && <p>{mailmsg}</p>}
        <p>{message && message}</p>
        <GoogleOAuthProvider clientId="925179345241-rrnrr1bjftet61234va0n2asenaoh1u3.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
          />
        </GoogleOAuthProvider>
        <label>EMAIL</label>
        <input
          type="email"
          name="email"
          value={login.email}
          onChange={handleInput}
          required
        />
        <label>PASSWORD</label>
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={handleInput}
          required
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
