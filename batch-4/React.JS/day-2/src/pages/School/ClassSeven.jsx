import React from "react";
import Show from "../../components/Show";

let s2 = [
  { name: "ram", cls: 7, roll: "01", marks: 100 },
  { name: "shyam", cls: 7, roll: "02", marks: 90 },
  { name: "rani", cls: 7, roll: "03", marks: 80 },
  { name: "madhu", cls: 7, roll: "04", marks: 70 },
];

export default function ClassSeven() {
  return (
    <div>
      <Show props={s2} />
    </div>
  );
}
