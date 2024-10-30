import Banner from "../components/banner";
import RatedRecipe from "../components/Ratedrecipe";
import Recipecard from "../components/recipecard";

const Homepage = () => {
    return (
        <div>
            <Banner>Get inspired, cook with passion and enjoy  <br />unforgettable moments at the table.</Banner>
            <RatedRecipe />
        </div>
    );
}

export default Homepage;