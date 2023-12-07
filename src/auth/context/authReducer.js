import { TYPES } from "../types/types";

export const authReducer = (state, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case TYPES.LOGOUT:
      return {
        ...state,
        logged: false,
        user: {},
      };

    default:
      return state;
  }
};
