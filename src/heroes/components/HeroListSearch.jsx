import { HeroItem } from "./HeroItem";
import { NoResultsView } from "./NoResultView";
export const HeroListSearch = ({ heroes, queryString }) => {
  if (queryString === "") {
    return null;
  }

  if (heroes.length === 0) {
    return <NoResultsView />;
  }

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
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
