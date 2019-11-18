const dinerInitialState = {
  isDiner: true,
  currentLocation: {
    lat: null,
    lng: null
  },
  favoriteTrucks: []
};

export const DinerReducer = (state = dinerInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
