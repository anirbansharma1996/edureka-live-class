import React,{useState,useEffect} from "react";
import { BASE_URL } from "../connection/baseurl.js";
import axios from "axios";

export default function Dod() {
  const [hero, setHero] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/random.php`);
        setHero(res.data.meals);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div class="">
        <img
          src={hero[0]?.strMealThumb}
          class="card-img-top"
          alt={hero[0]?.idMeal}
          width={"100%"}
          height={"400px"}
        />
        <div class="card-body">
          <h2 class="card-title">{hero[0]?.strMeal}</h2>
          <p>{hero[0]?.strCategory}</p>
          <p>{hero[0]?.strArea}</p>
          <p class="card-text">{hero[0]?.strInstructions}...</p>
          <p class="card-text">
            <small class="text-muted">Last updated 1 mins ago</small>
          </p>
        </div>
      </div>
    </>
  );
}
