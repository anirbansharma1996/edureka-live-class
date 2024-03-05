import { useState } from "react";

const Toggle = () => {
  const [mode, setMode] = useState(false);

  const handleMode = () => {
    setMode(!mode);
  };

  console.log(mode);

  return (
    <>
      <button
        style={{
          padding: "10px",
          fontSize: "30px",
          backgroundColor: "transparent",
          border:0,
          position:"absolute",
          right:0,
          top:10


        }}
        className="btn btn-ghost"
        onClick={handleMode}
      >
        {mode ? "🌕" : "🌑"}
      </button>
      <div
        style={{
          backgroundColor: `${mode ? "black" : "white"}`,
          height: "500px",
          color: `${mode ? "white" : "black"}`,
        }}
      >
        <h1>{mode ? "BLACK" : "LIGHT"}</h1>
      </div>
    </>
  );
};

export default Toggle;
