import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  switch (publisher) {
    case "DC Comics":
      return heroes.filter((hero) => hero.publisher === publisher);

    case "Marvel Comics":
      return heroes.filter((hero) => hero.publisher === publisher);

    default:
      throw new Error("Unknown publisher: " + publisher);
  }
};
