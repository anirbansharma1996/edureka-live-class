import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height:"100px"
      }}
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
