import "./App.css"
import Loading from "./animation/Loading"
import Count from "./components/Count"
import DataFetch from "./components/Product/Products"

export default function App(){
  return(
    <div>
     {/* <Count/> */}
     <DataFetch/>
    </div>
  )
}