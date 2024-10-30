import { MdAccessTime } from "react-icons/md";
import { PiCookingPot } from "react-icons/pi";
import { GoGraph } from "react-icons/go";
import { BiDish } from "react-icons/bi";
import { Link } from "react-router-dom";
const Recipecard = ({ recipe }) => {
  return (
    <div className="card bg-base-100 w-[403px] shadow-xl rounded-[33px] overflow-hidden">
      <figure>
        <img
          src={recipe.image}
          alt={recipe.name}
          className="h-[232px] w-full object-cover cursor-pointer hover:scale-[1.1] transition-all"
        />
      </figure>
      <div className="card-body px-[38px] py-[28px]">
        <h2 className="card-title font-bold text-[32px] mb-[18px]">
          {recipe.name}
        </h2>
        <table className="mb-[40px]">
          <tbody>
            <tr>
              <td>
                <MdAccessTime size={18.5} />
              </td>
              <td className="text-[20px]">{recipe.prepTimeMinutes}mins</td>

              <td>
                <PiCookingPot size={18.5} />
              </td>
              <td>{recipe.cookTimeMinutes}mins</td>
            </tr>
            <tr>
              <td>
                <GoGraph size={18.5} />
              </td>
              <td className="text-[20px]"> {recipe.difficulty}</td>

              <td>
                <BiDish size={20} />
              </td>
              <td className="text-[20px]">{recipe.cuisine}</td>
            </tr>
          </tbody>
        </table>
        <div className="card-actions">
          <Link
            to={"/recipe/" + recipe.id}
            className="btn bg-[#ffdb63] text-[var(--neutral-800)]"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Recipecard;
