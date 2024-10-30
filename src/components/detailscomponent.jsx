import { list } from "postcss";

const DetailsComponent = ({ details }) => {
  return (
    <div>
      <div className=" w-full relative">
        <img
          src={details.image}
          alt="recipe banner"
          className="h-[362px] w-full object-cover"
        />
        <span className="font-bold text=[48px] text-white absolute top-1/2 left-1/2 translate-x-[-50%]translate-y-[-50%]">
          {details.name}
        </span>
      </div>
      <div className="py-12 px-[77px] flex flex-col gap-5">
        <span className="font-bold text-[24px]">Ingredients</span>
        <ul className="list-disc ml-7">
          {details.ingredients.map((ingredients, i) => (
            <li key={i}>{ingredients}</li>
          ))}
        </ul>

        <span className="font-bold text-[24px]">Preparation</span>
        <ul className="list-decimal ml-7">
          {details.instructions.map((instructions, i) => (
            <li key={i}>{instructions}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailsComponent;
