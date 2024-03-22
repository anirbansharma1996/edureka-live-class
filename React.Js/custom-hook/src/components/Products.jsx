import React from "react";
import useFetch from "../custom/useFetch";

export default function Products() {
  const { data, isLoading, error } = useFetch("https://fakestoreapi.com/products");
  const result = data?.data;

  if (isLoading) {
    return <h3>Products Loading...</h3>;
  }
  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div>
      {result?.map((el) => (
        <p key={el.id}>{el.title}</p>
      ))}
    </div>
  );
}
