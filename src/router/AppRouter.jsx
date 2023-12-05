import { Routes, Route, Navigate } from "react-router-dom";
import { Marvel } from "../heroes/pages/Marvel";
import { DC } from "../heroes/pages/DC";
import { Login } from "../auth/pages/Login";
import { Search } from "../heroes/pages/Search";

export const AppRouter = () => {
  return (
    <>
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
