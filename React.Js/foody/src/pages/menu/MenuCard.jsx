import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuCard({ props }) {
  return (
    <>
      {props?.map((el) => (
        <div className="mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={el.strMealThumb}
                className="img-fluid rounded-start"
                alt={el.idMeal}
                width={"100%"}
                
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                {/* <iframe
                  src={el.strYoutube}
                  width={"100%"}
                  height={"200"}
                  allowFullScreen
                  frameborder="0"
                ></iframe> */}
                <h5 className="card-title">{el.strMeal}</h5>
                <p className="card-text">
                  {el.strArea} | {el.strCategory}
                </p>
                <p>
                {el.strInstructions.slice(0,700)}...
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 1 mins ago</small>
                </p>
             <NavLink to={`/recipe/${el.strMeal}`}>
             <button className="btn btn-warning w-100">Recipe</button>
              </NavLink> 
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
