import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../connection/baseurl";

export default function Menu() {
  const { name } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/search.php?s=${name}`);
        setData(res.data.meals)
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <section style={{ width: "90%", margin: "auto" }}>
      <h2 style={{textAlign:"center"}}>Cateagory : {name}</h2>
      <MenuCard props={data} />
    </section>
  );
}
