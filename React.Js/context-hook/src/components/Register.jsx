import React, { useState, useContext } from "react";

export default function Register() {
  const [userName, setUserName] = useState("");

  const handleInput = (e) => {
    setUserName((prev) => e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name-b3", userName);
    setTimeout(() => {
      window.location.href = "/";
    }, 0);
  };

  return (
    <div>
      Register
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} />
        <input type="submit" />
      </form>
    </div>
  );
}
