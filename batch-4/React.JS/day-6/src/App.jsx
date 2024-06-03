import "./App.css";
import { Loading } from "./components/Loading";
import Navbar from "./components/Navbar";
import { Allroute } from "./router/Allroute";

export default function App() {
  return (
    <>
      <Navbar />
      <Allroute />
    </>
  );
}
