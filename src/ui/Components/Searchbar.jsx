import searchBackground from "../../../assets/search-bg.jpg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import queryString from "query-string";
import { getHeroByName } from "../../heroes/helpers";
import { HeroItem } from "../../heroes/components/HeroItem";
export const SearchBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroByName(q);
  const heroesFounded = heroes.length > 0;

  const { search, onInputChange, onReset } = useForm({ search: "" });
  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${search}`);
    onReset();
  };
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative h-48">
      {/* Fondo con imagen */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: `url(${searchBackground})` }}
      ></div>
      <div className="flex items-center justify-center h-full relative z-10">
        {/* Barra de búsqueda */}
        <div className="relative w-full max-w-md">
          <form onSubmit={onSearchSubmit}>
            <input
              name="search"
              value={search}
              onChange={onInputChange}
              type="text"
              placeholder="Search Hero ..."
              className="text-center w-full p-2 text-gray-800 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 shadow-lg"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <MagnifyingGlassIcon
                alt="Search Icon"
                className="h-6 w-6 text-gray-400"
              />
            </div>
          </form>
        </div>
      </div>

      <ul
        role="list"
        className=" my-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {heroes.map(
          ({
            id,
            superhero,
            publisher,
            alter_ego,
            first_appearance,
            characters,
          }) => (
            <HeroItem
              key={id}
              id={id}
              superhero={superhero}
              publisher={publisher}
              alter_ego={alter_ego}
              first_appearance={first_appearance}
              characters={characters}
            ></HeroItem>
          )
        )}
      </ul>
    </div>
  );
};
