import { Link } from "react-router-dom";
export const HeroItem = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImage = `/assets/${id}.jpg`;
  return (
    <li key={id} className="col-span-1 rounded-lg bg-white shadow-xl">
      <div className="flex flex-1 h-full">
        <div className="flex-1/3">
          <img
            className="mx-auto h-48 max-w-maxflex-shrink-0 rounded-l-lg flex-initial"
            src={heroImage}
            alt=""
          />
        </div>
        <div className="flex flex-2/3 flex-col pl-3 flex-1 justify-around">
          <h1 className="font-hero text-3xl ">{superhero}</h1>
          <p className="font-hero-text text-xl">{alter_ego}</p>
          <p className="font-hero-text text-md text-gray-500">
            {first_appearance}
          </p>
          <Link to={`/hero/${id}`} className="text-blue-500 hover:underline">
            Más...
          </Link>
        </div>
      </div>
    </li>
  );
};
