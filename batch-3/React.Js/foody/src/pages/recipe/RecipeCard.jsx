import React from "react";

export default function RecipeCard({ props }) {

  return (
    <div>
      {props.map((el) => (
        <>
          <div
            class="dish-details"
            key={el.idMeal}
            style={{ width: "90%", margin: "auto" }}
          >
            <img
              height={"350px"}
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
          </div>
          <ul class="ingredients">
            <div className="left-list-ingredients">
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
            </div>
            <div className="right-list-ingredients">
              {el.strIngredient11 && (
                <li class="list-group-item">
                  {el.strIngredient11} : {el.strMeasure11}
                </li>
              )}
              {el.strIngredient12 && (
                <li class="list-group-item">
                  {el.strIngredient12} : {el.strMeasure12}
                </li>
              )}
              {el.strIngredient13 && (
                <li class="list-group-item">
                  {el.strIngredient13} : {el.strMeasure13}
                </li>
              )}
              {el.strIngredient14 && (
                <li class="list-group-item">
                  {el.strIngredient14} : {el.strMeasure14}
                </li>
              )}
              {el.strIngredient15 && (
                <li class="list-group-item">
                  {el.strIngredient15} : {el.strMeasure15}
                </li>
              )}
              {el.strIngredient16 && (
                <li class="list-group-item">
                  {el.strIngredient16} : {el.strMeasure16}
                </li>
              )}
              {el.strIngredient17 && (
                <li class="list-group-item">
                  {el.strIngredient17} : {el.strMeasure17}
                </li>
              )}
              {el.strIngredient18 && (
                <li class="list-group-item">
                  {el.strIngredient18} : {el.strMeasure18}
                </li>
              )}
              {el.strIngredient19 && (
                <li class="list-group-item">
                  {el.strIngredient19} : {el.strMeasure19}
                </li>
              )}
              {el.strIngredient20 && (
                <li class="list-group-item">
                  {el.strIngredient20} : {el.strMeasure20}
                </li>
              )}
            </div>
          </ul>
          <div class="card-body" style={{ textAlign: "center" }}>
            <a target="_blank" className="card-link">
              Youtube link
            </a>
          </div>
        </>
      ))}
    </div>
  );
}
