import React from "react";
import Swipper from "./Swipper";

export const Home = () => {
  return (
    <>
      <div className="hero-section">
        <h1>
          Find the best fit <br />
          Accordingly...
        </h1>
        <button>Find Now </button>
      </div>
      <Swipper />
    </>
  );
};
