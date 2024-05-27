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
    image: null,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPblog({ ...pblog, [name]: value });
  };
  const handleImageInput = (e) => {
    const file = e.target.files[0];
    const maxSize = 16 * 1024;
    if (file.size > maxSize) {
      setMessage("Image size must be less than 17KB");
      return;
    }
    setMessage("");
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPblog({ ...pblog, image: reader.result });
    };
    reader.onerror = (error) => {
      setMessage(error);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/blog`, pblog, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      if (res.status === 201) {
        setMessage(res.data.message);
        setPblog({
          title: "",
          content: "",
          image: null,
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
        {pblog.image && (
          <img width={"200px"} src={pblog.image} alt="upload image" />
        )}
        <input
          type="file"
          accept="image/*"
          required
          onChange={handleImageInput}
        />
        <input type="submit" value="Post" />
      </form>
    </div>
  );
}
