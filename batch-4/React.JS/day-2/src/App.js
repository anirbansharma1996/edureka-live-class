import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import "./App.css";
import Events from "./components/Events";
import Global from "./pages/Global";
import India from "./pages/India";
import ClassSeven from "./pages/School/ClassSeven";
import ClassSix from "./pages/School/ClassSix";

export default function App() {
  return (
    <>
      {/* <Navbar/>
      <About/>
      <Home/> 
       <Events/>
      */}
      {/* <Global/> */}
      {/* <India/> */}
      <ClassSix />
      <ClassSeven />
    </>
  );
}
