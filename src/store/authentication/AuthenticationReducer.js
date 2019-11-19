import { LOGOUT, SUCCESS } from "./AuthenticationTypes";

const authenticationInitialState = {
  user: {},
  isAuthenticated: false
};

export const authenticationReducer = (
  state = authenticationInitialState,
  action
) => {
  switch (action.type) {
    case SUCCESS:
      return {
        user: action.payload,
        isAuthenticated: true
      };

    case LOGOUT:
      return {
        user: {},
        isAuthenticated: false
      };

    default:
      return state;
  }
};
