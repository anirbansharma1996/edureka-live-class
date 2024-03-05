import { useState } from "react";

export default function Clock() {
  const [hr, setHr] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  setInterval(() => {
    setHr((prev) => new Date().getHours());
    setMin((prev) => new Date().getMinutes());
    setSec((prev) => new Date().getSeconds());
  }, 1000);

  return (
    <div style={{textAlign:"center"}}>
      <h1>
        {hr>12? hr-12:hr}:{min}:{sec} {hr>12 ? "PM":"AM"}
      </h1>
    </div>
  );
}
