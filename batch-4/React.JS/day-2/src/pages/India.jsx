import React from "react";
import Calculate from "../components/Calculate";

const datas = [
  { name: "Pablo Pandey", company: "Paan", valuation: 20 },
  { name: "Adani Kumar", company: "Adani", valuation: 10 },
  { name: "Harish Prasad", company: "Car", valuation: 50 },
  { name: "Ratan Tata", company: "Tata", valuation: 199 },
  { name: "Pritam Saha", company: "Web", valuation: 99 },
];

export default function India() {
  return (
    <div>
      <div className="parent">
        {datas.map((el) => (
          <Calculate props={{ el }} />
        ))}
      </div>
    </div>
  );
}
