import { BiSearch } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/search",
      search: `?q=${encodeURIComponent(e.target.recipes.value)}`,
    });
  };
  return (
    <div className="px-[77px] py-8">
      <nav className="flex items-center justify-between">
        <Link to="/" className="flex gap-3 items-center">
          <img src="./Ico.png" alt="" />
          <span className="font-medium text-[26px] text-[var(--neutral-800)]">
            Delights at the Table
          </span>
        </Link>
        {/* links */}
        <div className="flex gap-[46px]">
          <Link
            to={"/recipe"}
            className="font-bold text-[26px] text-[var(--neautral-800)]"
          >
            Recipes
          </Link>
          <Link
            to={"/"}
            className="font-bold text-[26px] text-[var(--neautral-800)]"
          >
            About Us
          </Link>
        </div>
        <form
          className="flex items-center gap-1 bg-[var(--white-200)] px-5 py-[10px] rounded-[22px]"
          onSubmit={handleSubmit}
        >
          <BiSearch />
          <input
            type="search"
            name="recipes"
            id=""
            className="bg-transparent outline-none font-light text-[15px] text-[var(--neutral-400)]"
            placeholder="search recipes"
          />
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
