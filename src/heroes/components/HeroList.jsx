import { HeroItem } from "./HeroItem";
import { getHeroesByPublisher } from "../helpers";
/* {
    id: "dc-batman",
    superhero: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    characters: "Bruce Wayne",
  } */
export const HeroList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-14"
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
    </>
  );
};
