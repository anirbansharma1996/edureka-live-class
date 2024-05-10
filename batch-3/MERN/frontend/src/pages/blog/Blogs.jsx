import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../api/baseurl";
import { useNavigate } from "react-router-dom";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [message, setMessage] = useState("");
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setIsloading(true);
        const res = await axios.get(`${BASE_URL}/blogs`);
        setBlogs(res.data);
        setIsloading(false);
        setMessage("");
      } catch (error) {
        setIsloading(false);
        setMessage(
          `${error.response.status + " " + error.response.statusText}`
        );
      }
    };
    fetchBlog();
  }, []);

  return (
    <div>
      {message && <h1>{message}</h1>}
      <div className="blogs-parent">
        {blogs?.reverse().map((el) => (
          <BlogCard props={el} />
        ))}
      </div>
    </div>
  );
}

export function BlogCard({ props }) {
  const { author, image, title, content, date } = props;
  const d = new Date(date).toLocaleString();
  const navigate = useNavigate();

  return (
    <div className="blogs-child">
      {image && <img src={`../upload/${image}`} style={{ width: "100px" }} alt={title} />}
      <h3>{title}</h3>
      <h5
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/user/${author._id}`)}
      >
        {author.username}
      </h5>
      <p>{content}</p>
      <p>{d}</p>
    </div>
  );
}
