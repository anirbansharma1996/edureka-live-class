import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../connection/baseurl.js";
import RecipeCard from "./recipe/RecipeCard.jsx";
export default function FindDish() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  const handleInput = (e) => {
    setName(e.target.value);
  };

  const handlefetchData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/search.php?s=${name}`);
      setName("")
      setData(res.data.meals);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div
        style={{
          width: "60%",
          margin: "auto",
          display: "flex",
          marginTop: "2%",
          marginBottom:"3%"
        }}
      >
        <input className="form-control" type="text" value={name}onChange={handleInput} />
        <button className="btn btn-primary" onClick={handlefetchData}>
          SEARCH
        </button>
      </div>
      <RecipeCard props={data} />
    </div>
  );
}
