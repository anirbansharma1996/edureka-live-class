import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const f = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8080/api/blogs");
        setBlogs(res.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    f();
  }, []);

  return (
    <div className="blogcard">
      {blogs.map((el) => (
        <BlogCard key={el._id} props={el} />
      ))}
    </div>
  );
};

export const BlogCard = ({ props, key }) => {
  return (
    <Link className="links" to={`/blog?id=${props._id}`}>
      <div key={key} className="blogcard-child">
        <img src={props.imageLink} alt={props.imagePath} />
        <h1>{props.title}</h1>
        <span>{props.author?.name}</span>
        <p className="first-font">{props.content}</p>
        <p>{props.date}</p>
      </div>
    </Link>
  );
};
