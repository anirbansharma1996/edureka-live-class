import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../connection/baseurl.js";
import MenuCard from "./menu/MenuCard.jsx";
import Loading from "../components/Loading.jsx";

const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
export default function Mletter() {
  const [data, setData] = useState([]);
  const [letter, setLetter] = useState("a");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BASE_URL}/search.php?f=${letter}`);
        setData(res.data.meals);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    };
    fetchData();
  }, [letter]);

  return (
    <section style={{ width: "90%", margin: "auto" }}>
      <h4 style={{ margin: "1%", textAlign: "center" }}>
        {" "}
        Cook meals by First Letter
      </h4>
      <div className="menu-letter">
        {alphabets.map((el) => (
          <p key={el} onClick={() => setLetter((prev) => el.toLowerCase())}>
            {el}
          </p>
        ))}
      </div>
      {loading ? (
        <Loading />
      ) : data === null ? (
        <div
          style={{ height: "200px", textAlign: "center", marginTop: "5rem" }}
        >
          Sorry We Don't have anything started with <h1 className="display-1">{letter}</h1> currently 🥺
        </div>
      ) : (
        <MenuCard props={data} />
      )}
    </section>
  );
}
