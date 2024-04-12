import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../connection/baseurl";
import Loading from "../../components/Loading";

export default function Menu() {
  const { name } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BASE_URL}/search.php?s=${name}`);
        setLoading(false);
        setData(res.data.meals);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <section style={{ width: "90%", margin: "auto" }}>
      <h2 style={{ textAlign: "center" }}>category : {name}</h2>
      {data == null ? (
        <div
          style={{ height: "200px", textAlign: "center", marginTop: "10rem" }}
        >
          Sorry We Don't have any <b>{name}</b> currently 🥺
        </div>
      ) : loading ? (
        <Loading />
      ) : (
        <MenuCard props={data} />
      )}
    </section>
  );
}
