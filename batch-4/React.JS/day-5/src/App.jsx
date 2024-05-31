import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState(0);
  const [state1, setState1] = useState(0);

  useEffect(() => {
    console.log(`${state} -> state use effect ran`);
    console.log(`${state1} -> state 1 use effect ran`);
  }, [state, state1]);

  return (
    <>
      useEffect Hook
      <button onClick={() => setState((p) => p + 1)}>Run useEffect</button>
      <button onClick={() => setState1((p) => p + 1)}>Run useEffect 1</button>
    </>
  );
}

export default App;
