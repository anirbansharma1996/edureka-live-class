import React from "react";

export default function Calculate({ props }) {
  const { el } = props;
  const handleAlert = (man) => {
    alert(`You have click on ${man}`);
  };

  const handlePrediction = (val, nam) => {
    let cal = val + val * (20 / 100);
    alert(`${nam} will have $${cal} Billion in 10 Years`);
  };
  return (
    <div>
      <div key={el.name} className="child">
        <h3>{el.name}</h3>
        <p>{el.company}</p>
        <h1>${el.valuation} Billion</h1>
        <button onClick={() => handleAlert(el.name)}>Check</button>&nbsp;
        <button onClick={() => handlePrediction(el.valuation, el.name)}>
          Prediction
        </button>
      </div>
    </div>
  );
}
