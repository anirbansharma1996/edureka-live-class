import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
    const navigate = useNavigate()
  const [signup, setSignup] = useState({
    username: "",
    email: "",
    password: "",
  });
  const notify = () => toast.success("Signup Successful!");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("ShopStop", JSON.stringify(signup));
    notify();
    setTimeout(()=>{
        navigate('/login')
    },1000)
  };

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form className="signup-form" onSubmit={handleSignup}>
        <label>
          User Name<sup style={{ color: "red" }}>*</sup>{" "}
        </label>
        <input
          onChange={handleInput}
          type="text"
          name="username"
          value={signup.username}
          required
        />
        <label>
          User Email<sup style={{ color: "red" }}>*</sup>
        </label>
        <input
          onChange={handleInput}
          type="email"
          name="email"
          value={signup.email}
          required
        />
        <label>
          Password<sup style={{ color: "red" }}>*</sup>
        </label>
        <input
          onChange={handleInput}
          type="password"
          minLength={8}
          name="password"
          value={signup.password}
          required
        />
        <input type="submit" value={"SIGNUP"} />
      </form>
      <ToastContainer />
      <p>
        Already Have an Account ? <Link to="/login">Login</Link> here
      </p>
    </div>
  );
}
