import { TYPES } from "../types/types";

export const authReducer = (state, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return {
        ...state,
        logged: true,
        user: action.payload.user,
        id: action.payload.id,
      };

    case TYPES.LOGOUT:
      return {
        ...state,
        logged: false,
        user: null,
        id: null,
      };

    default:
      return state;
  }
};
