import React from "react";
import Show from "../../components/Show";

let s1 = [
  { name: "Laxman", cls: 6, roll: "01", marks: 99 },
  { name: "Rita", cls: 6, roll: "02", marks: 79 },
  { name: "puja", cls: 6, roll: "03", marks: 89 },
  { name: "Biplab", cls: 6, roll: "04", marks: 59 },
];

export default function ClassSix() {
  

  return (
    <div >
        <Show props={s1}/>       
    </div>
  );
}
