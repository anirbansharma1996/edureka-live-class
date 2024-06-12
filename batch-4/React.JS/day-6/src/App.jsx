import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Allroute } from "./router/Allroute";

export default function App() {
  return (
    <>
      <Navbar />
      <Allroute />
      <Footer/>
    </>
  );
}
