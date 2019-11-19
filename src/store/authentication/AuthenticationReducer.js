import { LOGOUT, SUCCESS } from "./AuthenticationTypes";

const authenticationInitialState = {
  role: "",
  name: "",
  isAuthenticated: false,
  isDiner: false,
  isOperator: false
};

export const authenticationReducer = (
  state = authenticationInitialState,
  action
) => {
  switch (action.type) {
    case SUCCESS:
      console.log("action", action);
      return {
        ...state,
        isAuthenticated: true,
        isDiner: true
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
