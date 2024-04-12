import "./App.css"
import About from "./components/About"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

export default function App(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <About/>
        <Gallery/>
        <Footer/>
        </>
    )
}