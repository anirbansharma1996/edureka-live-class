import React from "react";
import useFetch from "../custom/useFetch";

export default function Meals() {
  const { data, isLoading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const meals = data?.data?.categories;

  if (isLoading) {
    return <h3>Meals Loading...</h3>;
  }
  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div>
      {meals?.map((el) => (
        <p key={el.idCategory}>{el.strCategory}</p>
      ))}
    </div>
  );
}
