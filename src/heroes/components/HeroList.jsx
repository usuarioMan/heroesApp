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
      <ul>
        {heroes.map(({ id, superhero }) => (
          <li key={id}>{superhero}</li>
        ))}
      </ul>
    </>
  );
};
