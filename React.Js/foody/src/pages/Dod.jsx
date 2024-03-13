import React, { useState, useEffect } from "react";
import { BASE_URL } from "../connection/baseurl.js";
import axios from "axios";
import Loading from "../components/Loading.jsx";

export default function Dod() {
  const [hero, setHero] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BASE_URL}/random.php`);
        setLoading(false);
        setHero(res.data.meals);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="dish-of-the-day">
            <img
              src={hero[0]?.strMealThumb}
              class="card-img-top"
              alt={hero[0]?.idMeal}
              width={"100%"}
              height={"400px"}
            />
            <div class="card-body">
              <h2 class="card-title">{hero[0]?.strMeal}</h2>
              <p>
                {hero[0]?.strCategory} | {hero[0]?.strArea}
              </p>
              <p class="card-text">{hero[0]?.strInstructions}...</p>
              <p class="card-text">
                <small class="text-muted">Last updated 1 mins ago</small>
              </p>
            </div>
          </div>
          <div style={{ width: "90%", margin: "auto" }}>
            <details>
              <summary>Recipe</summary>
              <ul class="ingredients">
                <div className="left-list-ingredients">
                  {hero[0]?.strIngredient1 && (
                    <li class="list-group-item">
                      {hero[0]?.strIngredient1} : {hero[0]?.strMeasure1}
                    </li>
                  )}
                  {hero[0]?.strIngredient2 && (
                    <li class="list-group-item">
                      {hero[0]?.strIngredient2} : {hero[0]?.strMeasure2}
                    </li>
                  )}
                  {hero[0]?.strIngredient3 && (
                    <li class="list-group-item">
                      {hero[0]?.strIngredient3} : {hero[0]?.strMeasure3}
                    </li>
                  )}
                  {hero[0]?.strIngredient4 && (
                    <li class="list-group-item">
                      {hero[0]?.strIngredient4} : {hero[0]?.strMeasure4}
                    </li>
                  )}
                  {hero[0]?.strIngredient5 && (
                    <li class="list-group-item">
                      {hero[0]?.strIngredient5} : {hero[0]?.strMeasure5}
                    </li>
                  )}
                  {hero[0]?.strIngredient6 && (
                    <li class="list-group-item">
                      {hero[0]?.strIngredient6} : {hero[0]?.strMeasure6}
                    </li>
                  )}
                  {hero[0]?.strIngredient7 && (
                    <li class="list-group-item">
                      {hero[0]?.strIngredient7} : {hero[0]?.strMeasure7}
                    </li>
                  )}
                  {hero[0]?.strIngredient8 && (
                    <li class="list-group-item">
                      {hero[0]?.strIngredient8} : {hero[0]?.strMeasure8}
                    </li>
                  )}
                  {hero[0]?.strIngredient9 && (
                    <li class="list-group-item">
                      {hero[0]?.strIngredient9} : {hero[0]?.strMeasure9}
                    </li>
                  )}
                  {hero[0]?.strIngredient10 && (
                    <li class="list-group-item">
                      {hero[0]?.strIngredient10} : {hero[0]?.strMeasure10}
                    </li>
                  )}
                </div>
                <div className="right-list-ingredients">
                  {hero[0]?.strIngredient11 && (
                    <li class="list-group-item">
                      {hero[0]?.strIngredient11} : {hero[0]?.strMeasure11}
                    </li>
                  )}
                  {hero[0]?.strIngredient12 && (
                    <li class="list-group-item">
                      {hero[0]?.strIngredient12} : {hero[0]?.strMeasure12}
                    </li>
                  )}
                  {hero[0]?.strIngredient13 && (
                    <li class="list-group-item">
                      {hero[0]?.strIngredient13} : {hero[0]?.strMeasure13}
                    </li>
                  )}
                  {hero[0]?.strIngredient14 && (
                    <li class="list-group-item">
                      {hero[0]?.strIngredient14} : {hero[0]?.strMeasure14}
                    </li>
                  )}
                  {hero[0]?.strIngredient15 && (
                    <li class="list-group-item">
                      {hero[0]?.strIngredient15} : {hero[0]?.strMeasure15}
                    </li>
                  )}
                  {hero[0]?.strIngredient16 && (
                    <li class="list-group-item">
                      {hero[0]?.strIngredient16} : {hero[0]?.strMeasure16}
                    </li>
                  )}
                  {hero[0]?.strIngredient17 && (
                    <li class="list-group-item">
                      {hero[0]?.strIngredient17} : {hero[0]?.strMeasure17}
                    </li>
                  )}
                  {hero[0]?.strIngredient18 && (
                    <li class="list-group-item">
                      {hero[0]?.strIngredient18} : {hero[0]?.strMeasure18}
                    </li>
                  )}
                  {hero[0]?.strIngredient19 && (
                    <li class="list-group-item">
                      {hero[0]?.strIngredient19} : {hero[0]?.strMeasure19}
                    </li>
                  )}
                  {hero[0]?.strIngredient20 && (
                    <li class="list-group-item">
                      {hero[0]?.strIngredient20} : {hero[0]?.strMeasure20}
                    </li>
                  )}
                </div>
              </ul>
            </details>
          </div>
        </>
      )}
    </>
  );
}
