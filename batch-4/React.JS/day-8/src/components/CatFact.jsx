import React from "react";
import { useFetchData } from "../custom/useFetchData";

export default function CatFact() {
  const { data, error, isloading,f } = useFetchData("https://catfact.ninja/fact");

  return (
    <div>
      <h1>CAT FACT</h1>
      <button onClick={()=>f()}>MORE</button>
      {isloading && <p>Loading ... </p>}
      {error && <p>{error}</p>}
      {!isloading && !error && (
        <p>
          {" "}
          {data.fact}
        </p>
      )}
    </div>
  );
}
