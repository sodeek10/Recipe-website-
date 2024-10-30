import { useQuery, useQueryClient } from "@tanstack/react-query";
import Recipecard from "../components/recipecard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RecipePage = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { isPending, isError, data } = useQuery({
    queryKey: ["recipes", page],
    queryFn: async () => {
      const response = await fetch(
        `https://dummyjson.com/recipes?limit=10&skip=${page * 10 - 10}`
      );
      const data = await response.json();
      return data;
    },
  });
  const queryClient = useQueryClient();
  const handleClick = (pageNumber) => {
    setPage(pageNumber);
    // navigate(`/recipe&page=${pageNumber}`);

    // queryClient.invalidateQueries("recipes");
    document.querySelector("#top").scrollIntoView(true);
  };
  return (
    <div>
      <h2 id="top">Recipes</h2>
      {isPending && <p>Loading...</p>}
      {isError && <p>An error message</p>}
      {data && data.recipes && (
        <div>
          <div className="grid grid-cols-3 gap-y-6">
            {data.recipes.map((recipe) => (
              <Recipecard recipe={recipe} key={recipe.id} />
            ))}
          </div>
          <div className="join">
            {Array(data.total / 10)
              .fill(null)
              .map((_, i) => {
                i++;
                return (
                  <button
                    key={i}
                    className={`join-item btn ${page == i ? "btn-active" : ""}`}
                    onClick={() => handleClick(i)}
                  >
                    {i}
                  </button>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipePage;
