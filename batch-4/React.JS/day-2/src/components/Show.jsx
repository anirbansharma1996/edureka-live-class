import React from "react";

export default function Show({ props }) {
  const handleViewScore = (score) => {
    alert(`Score is ${score}`);
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <h4>Class : {props[0]?.cls}</h4>
      {props?.map((el) => (
        <ShowCard props={el} handleViewScore={handleViewScore}/>
      ))}
    </div>
  );
}

export function ShowCard({props, handleViewScore}){
    const {name , cls , marks , roll  } = props
    return(
        <div key={roll}>
          <h3>{name}</h3>
          <p>{cls}</p>
          <h5>{roll}</h5>
          <button onClick={() => handleViewScore(marks)}>View Score</button>
        </div>
    )
}