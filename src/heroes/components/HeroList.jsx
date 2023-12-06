import { HeroItem } from "./HeroItem";
import { getHeroesByPublisher } from "../helpers";
import { useMemo } from "react";
export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
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
