import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import DetailsComponent from "../components/detailscomponent";

const RecipeDetails = () => {
  const { id } = useParams();
  const { data, isPending, error } = useQuery({
    queryKey: ["recipe", id],
    queryFn: async () => {
      const response = await fetch("https://dummyjson.com/recipes/" + id);
      const data = response.json();
      return data;
    },
    // other options...
  });
  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>Failed to load the resource, please try again!</div>}
      {data && <DetailsComponent details={data} />}
    </div>
  );
};

export default RecipeDetails;
