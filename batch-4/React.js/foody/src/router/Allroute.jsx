import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/menu/Menu";
import Recipe from "../pages/recipe/Recipe";
import Dod from "../pages/Dod";
import FindDish from "../pages/FindDish";
import Mletter from "../pages/Mletter";

export default function Allroute() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/dish-of-the-day" element={<Dod/>}></Route>
      <Route path="/find-recipe" element={<FindDish/>}></Route>
      <Route path="/menu/:name" element={<Menu />}></Route>
      <Route path="/recipe/:name" element={<Recipe />}></Route>
      <Route path="/meals-by-first-letter" element={<Mletter/>}></Route>
      <Route path="*" element={<Home />}></Route>
    </Routes>
  );
}
