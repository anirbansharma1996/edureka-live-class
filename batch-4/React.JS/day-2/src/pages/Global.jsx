import React from "react";
import Calculate from "../components/Calculate";

const datas = [
  { name: "Elon Mask", company: "Tesla", valuation: 200 },
  { name: "Jeff Bezos", company: "Amazon", valuation: 130 },
  { name: "Mark Zuck", company: "facebook", valuation: 150 },
  { name: "Mukesh Ambani", company: "Relience", valuation: 99 },
];

export default function Global() {
  let res = datas.filter((el) => el.valuation >= 150);
  console.log(res);

  return (
    <div>
      <span>
        Gretter Than $140 Billion :
        {res.map((el) => (
          <p>{el.name}</p>
        ))}
      </span>
      <div className="parent">
        {datas.map((el) => (
          <Calculate props={{ el }} />
        ))}
      </div>
    </div>
  );
}
