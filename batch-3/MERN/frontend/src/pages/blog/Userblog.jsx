import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { BASE_URL } from "../../api/baseurl";
import { TokenContext } from "../../context/Authcontext";

export default function Userblog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token, decode } = useContext(TokenContext);

  const [sblog, setSblog] = useState([]);
  const [message, setMessage] = useState("");
  const [isloading, setIsloading] = useState(false);

  if (!token) {
    navigate("/login");
  }

  useEffect(() => {
    const fetchSoloBlog = async () => {
      try {
        setIsloading(true);
        const res = await axios.get(`${BASE_URL}/blog/user/${id}`, {
          headers: { Authorization: token },
        });
        setSblog(res.data);
        setIsloading(false);
        setMessage("");
      } catch (error) {
        setIsloading(false);
        setMessage(
          `${error.response.status + " " + error.response.statusText}`
        );
      }
    };
    fetchSoloBlog();
  }, [message]);
  console.log(sblog);
  return (
    <div>
      <span>
        <Link to="/"> Blog</Link> / <b>{sblog[0]?.author?.username}'s blogs</b>
      </span>
      {isloading && <h1>Loading...</h1>}
      {message && <h1>{message}</h1>}
      <div>
        {sblog?.reverse().map((el) => (
          <BlogCard props={el} />
        ))}
      </div>
    </div>
  );
}

export function BlogCard({ props }) {
  const { author, title, content, date } = props;
  const d = new Date(date).toLocaleString();

  return (
    <div>
      <h3>{title}</h3>
      <h5>{author.username}</h5>
      <p>{content}</p>
      <p>{d}</p>
      <hr />
    </div>
    
  );
}
