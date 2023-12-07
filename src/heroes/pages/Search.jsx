import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { SearchBar } from "../../ui/Components/Searchbar";
import { getHeroByName } from "../../heroes/helpers";
import { HeroListSearch } from "../components/HeroListSearch";

export const Search = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { q = "" } = queryString.parse(search);
  const heroes = getHeroByName(q);

  const onSubmitNavigateTo = (inputValue) => {
    navigate(`?q=${inputValue}`);
  };

  return (
    <>
      <SearchBar onSubmitNavigateTo={onSubmitNavigateTo} />
      <HeroListSearch heroes={heroes} queryString={q} />
    </>
  );
};
