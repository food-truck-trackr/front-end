import { LOGOUT, SUCCESS } from "./AuthenticationTypes";

const authenticationInitialState = {
  role: "",
  name: "",
  isAuthenticated: false
};

export const authenticationReducer = (
  state = authenticationInitialState,
  action
) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        role: action.payload
      };

    case LOGOUT:
      return {
        role: "",
        name: "",
        isAuthenticated: false
      };

    default:
      return state;
  }
};
