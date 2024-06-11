import React, { useRef } from "react";

export default function Scroll() {
  const s1 = useRef(null);
  const s2 = useRef(null);
  const s3 = useRef(null);

  const handleScroll = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <nav>
        <button onClick={() => handleScroll(s1)}>HOME</button>
        <button onClick={() => handleScroll(s2)}>ABOUT</button>
        <button onClick={() => handleScroll(s3)}>LOGIN</button>
      </nav>
      <div ref={s1} style={{ backgroundColor: "red", height: "80vh" }}>
        <h1>Home section</h1>
      </div>
      <div ref={s2} style={{ backgroundColor: "green", height: "80vh" }}>
        <h1>About section</h1>
      </div>
      <div ref={s3} style={{ backgroundColor: "blue", height: "80vh" }}>
        <h1>Login section</h1>
      </div>
    </div>
  );
}
