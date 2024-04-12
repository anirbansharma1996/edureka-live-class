import React from "react";
import MockCard from "./MockCard";
import data from "../../data.json";

export default function Mock() {
  return (
    <div>
      <h2>STORE</h2>
      {data?.map((el) => (
        <div key={el.id}>
          <MockCard props={el} />
        </div>
      ))}
    </div>
  );
}
