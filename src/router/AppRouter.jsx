import { Routes, Route, Navigate } from "react-router-dom";
import { Marvel, DC, Search } from "../heroes";
import { Login } from "../auth";
import { Navbar } from "../ui";
export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<Marvel />} />
        <Route path="dc" element={<DC />} />
        <Route path="login" element={<Login />} />
        <Route path="search" element={<Search />} />
        <Route path="/*" element={<Navigate to={"marvel"} />} />
      </Routes>
    </>
  );
};
