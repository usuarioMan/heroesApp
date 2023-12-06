import { Navbar } from "../../ui";
import { Route, Routes, Navigate } from "react-router-dom";
import { Marvel, DC, Search, Hero } from "../pages";
export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<Marvel />} />
        <Route path="dc" element={<DC />} />
        <Route path="search" element={<Search />} />
        <Route path="hero/:id" element={<Hero />} />
        <Route path="/*" element={<Navigate to={"marvel"} />} />
      </Routes>
    </>
  );
};
