import { heroes } from "../data/heroes";

export const getHeroByName = (name) => {
  // Verificar que name no sea un string vacío
  if (!name.trim()) {
    return [];
  }

  // Verificar que name solo contenga caracteres alfabéticos
  const isValidName = /^[a-zA-Z\s]+$/.test(name);
  if (!isValidName) {
    return [];
  }

  // Convertir el nombre a minúsculas para hacer la búsqueda sin distinción entre mayúsculas y minúsculas
  const lowerCaseName = name.toLowerCase();

  // Filtrar los héroes cuyo nombre coincida (sin distinción entre mayúsculas y minúsculas)
  const matchingHeroes = heroes.filter((hero) =>
    hero.superhero.toLowerCase().includes(lowerCaseName)
  );

  return matchingHeroes;
};
