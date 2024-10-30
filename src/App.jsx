import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Homepage from "./pages/homepage";
import RecipePage from "./pages/Recipepage";
import RecipeDetails from "./pages/recipedetails";
import Footer from "./components/footer";
import SearchPage from "./pages/searchPage";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/recipe" element={<RecipePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
