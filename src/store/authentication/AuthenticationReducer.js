const authenticationInitialState = {
  username: "",
  password: "",
  email: "",
  diner: false,
  operator: false
};

export const AuthenticationReducer = (
  state = authenticationInitialState,
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};
