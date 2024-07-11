import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const SingleBlog = () => {
  const [single, setSingle] = useState([]);
  const [params, setParams] = useSearchParams();
  const id = params.get("id");

  useEffect(() => {
    const f = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8080/api/blog/${id}`);
        if (res.status == 200) {
          setSingle(res.data);
        } else {
          alert("could not find blog...");
        }
      } catch (error) {
        console.log(error);
      }
    };
    f();
  }, [id]);

  return (
    <div style={{ margin: "auto", marginTop: "1rem", width: "80%" }}>
      <h1>{single.title}</h1>
      <p>{new Date(single.date).toLocaleString()}</p>
      <img width={"100%"} src={single.imageLink} alt={single.imgPath} />
      <span>By : {single.author?.name}</span>
      <p>{single.content}</p>
    </div>
  );
};
