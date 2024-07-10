import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const initialState = {
  title: "",
  content: "",
  image: "",
};

export const WriteBlog = () => {
  const [message, setMessage] = useState("");
  const [postblog, setPostBlog] = useState(initialState);
  const { token } = useContext(AuthContext);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPostBlog({ ...postblog, [name]: value });
  };
  const handleFile = (e) => {
    const file = e.target.files[0];
    setPostBlog({ ...postblog, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in postblog) {
      data.append(key, postblog[key]);
    }

    setMessage("");
    try {
      const res = await axios.post("http://127.0.0.1:8080/api/blog", data, {
        headers: { Authorization: token },
      });
      if (res.status == 201) {
        setMessage(res.data);
        setPostBlog(initialState);
      } else {
        setMessage("something went wrong");
      }
    } catch (error) {
      setMessage(error.response.data);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">TITLE</label>
        <br />
        <input
          type="text"
          name="title"
          id="title"
          value={postblog.title}
          onChange={handleInput}
        />
        <br />
        <label htmlFor="content">CONTENT</label>
        <br />
        <textarea
          name="content"
          id="content"
          value={postblog.content}
          onChange={handleInput}
        ></textarea>
        <br />
        <label htmlFor="image">IMAGE</label>
        <br />
        <input type="file" name="image" id="image" onChange={handleFile} />
        <br />
        <br />
        <input type="submit" />
      </form>
      {message}
      <br />
      {postblog.image && (
        <img
          width={300}
          src={URL.createObjectURL(postblog.image)}
          alt="preview"
        />
      )}
    </div>
  );
};
