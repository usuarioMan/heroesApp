import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { TYPES } from "../types/types";

export const AuthProvider = ({ children }) => {
  const init = () => {
    const user = localStorage.getItem("user");
    const initialUser = user
      ? { logged: true, user: JSON.parse(user) }
      : { logged: false, user: {} };
    return initialUser;
  };
  const [authState, dispatch] = useReducer(authReducer, null, init);

  const onLogin = (name = "") => {
    const user = { id: "ABC", name };
    const action = {
      type: TYPES.LOGIN,
      payload: user,
    };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, onLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
