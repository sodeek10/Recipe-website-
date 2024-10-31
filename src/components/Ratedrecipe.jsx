import { useQuery } from "@tanstack/react-query";
import Recipecard from "./recipecard";
import CardSkeleton from "./cardskeleton";

const RatedRecipe = () => {
  const { isPending, data, error, isError } = useQuery({
    queryKey: ["rated-recipe"],
    queryFn: async () => {
      const response = await fetch(
        "https://dummyjson.com/recipes?sortBy=rating&order=desc&limit=3"
      );
      const data = await response.json();
      return data.recipes;
    },
  });

  const arr = Array(3).fill(null);

  return (
    <section className="rated py-[77px]">
      <h2 className="text-center text-[38px] font-bold ">Top Rated Recipes </h2>
      <div className="flex justify-between gap-2 mt-[58px]">
        {isPending &&
          arr.map((_, i) => {
            return <CardSkeleton key={i} />;
          })}
        {error && <p>Error: {error.message}</p>}
        {data &&
          data.map((recipe) => <Recipecard key={recipe.id} recipe={recipe} />)}
      </div>
    </section>
  );
};

export default RatedRecipe;
