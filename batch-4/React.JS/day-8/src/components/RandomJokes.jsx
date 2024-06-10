import React from "react";
import { useFetchData } from "../custom/useFetchData";

export default function RandomJokes() {
  const { data, error, isloading, f } = useFetchData(
    "https://official-joke-api.appspot.com/random_joke"
  );

  return (
    <div>
      <h1>RANDOM JOKES</h1>
      <button onClick={() => f()}>MORE</button>
      {isloading && <p>Loading ... </p>}
      {error && <p>{error}</p>}
      {!isloading && !error && (
        <p>
          <b>SETUP : </b>
          {data.setup} <br />
          <b>PUNCHLINE : </b>
          {data.punchline}
        </p>
      )}
    </div>
  );
}
