import { TYPES } from "../types/types";

export const authReducer = (state, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return {
        ...state,
        logged: true,
        name: action.payload,
      };

    case TYPES.LOGOUT:
      return {
        ...state,
        logged: false,
        name: null,
      };

    default:
      return state;
  }
};
