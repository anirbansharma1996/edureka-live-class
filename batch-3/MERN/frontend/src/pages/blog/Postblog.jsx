import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { TokenContext } from "../../context/Authcontext";
import { BASE_URL } from "../../api/baseurl";

export default function Postblog() {
  const { token } = useContext(TokenContext);
  const [message, setMessage] = useState("");
  const [pblog, setPblog] = useState({
    title: "",
    content: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPblog({ ...pblog, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/blog`, pblog, {
        headers: { Authorization: token },
      });
      if (res.status === 201) {
        setMessage(res.data.message);
        setPblog({
          title: "",
          content: "",
        });
      }
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <span>
        {" "}
        <Link to="/user">User</Link> /<u> Write</u>
      </span>
      <h3>WRITE YOUR BLOG HERE</h3>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={pblog.title}
          type="text"
          placeholder="blog title"
          onChange={handleInput}
          required
        />
        <textarea
          name="content"
          value={pblog.content}
          cols="60"
          rows="10"
          placeholder="blog content"
          onChange={handleInput}
          required
        ></textarea>
        <input type="submit" value="Post" />
      </form>
    </div>
  );
}
