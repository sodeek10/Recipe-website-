import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import Recipecard from "../components/recipecard";

const SearchPage = () => {
  const [SearchParams] = useSearchParams();
  const { isPending, isError, data } = useQuery({
    queryKey: ["search", SearchParams.get("q")],
    queryFn: async () => {
      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${SearchParams.get("q")}`
      );
      const data = await response.json();
      return data.recipes;
    },
    refetchInterval: 5000, // refetch every 5 seconds
  });
  return (
    <div>
      {isPending && <h2>Loading...</h2>}
      {isError && <h2>Error: {error.message}</h2>}
      {data && (
        <div>
          <h2>Search Results for: {SearchParams.get("q")}</h2>
          {data.map((recipe) => (
            <Recipecard recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};
export default SearchPage;
