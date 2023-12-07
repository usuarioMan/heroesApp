import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { TYPES } from "../types/types";
const initialState = {
  logged: false,
  user: null,
};
export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const onLogin = (user = "") => {
    const action = {
      type: TYPES.LOGIN,
      payload: { id: "ABC", user },
    };
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{ ...authState, onLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
