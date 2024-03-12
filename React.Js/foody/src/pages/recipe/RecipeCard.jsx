import React from "react";

export default function RecipeCard({ props }) {
  console.log(props);
  return (
    <>
      {props.map((el) => (
        <div class="" key={el.idMeal} style={{ width: "90%", margin: "auto" }}>
          <img
            height={"300px"}
            src={el.strMealThumb}
            class="card-img-top"
            alt={el.strMeal}
          />
          <div class="card-body">
            <h5 class="card-title">{el.strMeal}</h5>
            <p class="card-text">
              <p>
                <b>
                  {el.strArea} | {el.strCategory}
                </b>
              </p>
              {el.strInstructions}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            {el.strIngredient1 && (
              <li class="list-group-item">
                {el.strIngredient1} : {el.strMeasure1}
              </li>
            )}
            {el.strIngredient2 && (
              <li class="list-group-item">
                {el.strIngredient2} : {el.strMeasure2}
              </li>
            )}
            {el.strIngredient3 && (
              <li class="list-group-item">
                {el.strIngredient3} : {el.strMeasure3}
              </li>
            )}
            {el.strIngredient4 && (
              <li class="list-group-item">
                {el.strIngredient4} : {el.strMeasure4}
              </li>
            )}
            {el.strIngredient5 && (
              <li class="list-group-item">
                {el.strIngredient5} : {el.strMeasure5}
              </li>
            )}
            {el.strIngredient6 && (
              <li class="list-group-item">
                {el.strIngredient6} : {el.strMeasure6}
              </li>
            )}
            {el.strIngredient7 && (
              <li class="list-group-item">
                {el.strIngredient7} : {el.strMeasure7}
              </li>
            )}
            {el.strIngredient8 && (
              <li class="list-group-item">
                {el.strIngredient8} : {el.strMeasure8}
              </li>
            )}
            {el.strIngredient9 && (
              <li class="list-group-item">
                {el.strIngredient9} : {el.strMeasure9}
              </li>
            )}
            {el.strIngredient10 && (
              <li class="list-group-item">
                {el.strIngredient10} : {el.strMeasure10}
              </li>
            )}
          </ul>
          <div class="card-body">
            <a target="_blank" className="card-link">
              Youtube link
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
