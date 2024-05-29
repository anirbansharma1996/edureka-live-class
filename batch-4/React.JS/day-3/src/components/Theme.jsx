import React, { useState } from "react";
import { FiSun } from "react-icons/fi";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Theme() {
  const [theme, setTheme] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleTheme = () => {
    setTheme(!theme);
  };
  const handleLoad = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <div style={{ width: "90%", margin: "auto", padding: "10px" }}>
        <div style={{ display: "flex", padding: "10px" }}>
          {theme ? (
            <button style={btnStyle} onClick={handleTheme}>
              <BsFillMoonStarsFill />
            </button>
          ) : (
            <button style={btnStyle} onClick={handleTheme}>
              <FiSun />
            </button>
          )}
        </div>

        <div
          style={{
            height: "200px",
            border: "1px solid",
            backgroundColor: theme ? "white" : "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1 style={{ color: theme ? "black" : "white" }}>DARK</h1>
        </div>
      </div>
      <div style={{ width: "90%", margin: "auto", padding: "10px" }}>
        <button onClick={handleLoad}>Load</button>
        <h1>{isLoading ? "Loading..." : "Loaded"}</h1>
      </div>
    </>
  );
}

const btnStyle = {
  border: 0,
  display: "flex",
  jusifyContent: "center",
  alignItems: "center",
  backgroundColor: "inherit",
};
