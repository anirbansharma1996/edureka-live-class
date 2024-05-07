import React, { useContext, useState, useEffect } from "react";
import { TokenContext } from "../context/Authcontext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../api/baseurl";

export default function User() {
  const { decode, token } = useContext(TokenContext);
  const navigate = useNavigate();

  if (!decode) {
    window.location.href = "/login";
  }
  const handleLogout = () => {
    localStorage.removeItem("b3-blog-auth-token");
    window.location.href = "/login";
  };

  //----------------------------------------
  const [blog, setBlog] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/blog/user/${decode.id}`, {
        headers: { Authorization: token },
      });
      setBlog(res.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  //----------------------------------------

  return (
    <div>
      
      <h1>Welcome {decode.name}</h1>
      <p>
        Registered Email : <b>{decode.email}</b>
      </p>
      <button onClick={handleLogout}>Logout</button>&nbsp;
      <button onClick={() => navigate("/write-blog")}>Write Blog</button>
      <hr />
      <div className="blogs-parent">
        {blog?.map((el) => (
          <UserBlogs props={el} fetchData={fetchData} />
        ))}
      </div>
    </div>
  );
}

export function UserBlogs({ props, fetchData }) {
  const { _id, title, content, date } = props;
  const { token } = useContext(TokenContext);
  const [editing, setEditing] = useState(false);
  const [newblog, setNewblog] = useState({ title: title, content: content });

  const d = new Date(date).toLocaleString();

  // DELETE A BLOG
  const handleDelete = async (id) => {
    let confirmed = window.confirm("Do you want to delete this blog ?");
    if (confirmed) {
      try {
        let r = await axios.delete(`${BASE_URL}/blog/${id}`, {
          headers: { Authorization: token },
        });
        if (r.status === 200) {
          fetchData();
        }
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
  };
  // EDIT / UPDATE A BLOG
  // for opening the form / modal
  const handleEditForm = () => {
    setEditing(true);
  };
  // taking the new updated values
  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewblog({ ...newblog, [name]: value });
  };
  // uploading the updated data on database
  const handleUpdate = async (id) => {
    try {
      const r = await axios.put(`${BASE_URL}/blog/${id}`, newblog, {
        headers: { Authorization: token },
      });
      if (r.status === 201) {
        fetchData();
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
    setEditing(false);
  };

  return (
    <div className="blogs-child">
      {editing ? (
        <input
          type="text"
          name="title"
          value={newblog.title}
          onChange={handleInput}
        />
      ) : (
        <h3>{title}</h3>
      )}
      {editing ? (
        <textarea
          cols="30"
          rows="10"
          name="content"
          value={newblog.content}
          onChange={handleInput}
        ></textarea>
      ) : (
        <p>{content}</p>
      )}
      {!editing && <p>{d}</p>}

      {editing ? (
        <>
          <button onClick={() => handleUpdate(_id)}>SAVE</button>&nbsp;
          <button onClick={() => setEditing(false)}>CANCEL</button>
        </>
      ) : (
        <>
          <button onClick={handleEditForm}>EDIT</button> &nbsp;
          <button onClick={() => handleDelete(_id)}>DELETE</button>
        </>
      )}
    </div>
  );
}
