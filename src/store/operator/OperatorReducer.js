const OperatorInitialState = {
  isOperator: true,
  trucksOwned: [],
  truck: {
    truckName: "",
    truckImage: "",
    cuisineType: "",
    customerRatings: 0,
    customerRatingAvg: 0,
    menuItems: [
      {
        menuItem: "",
        itemDescription: "",
        itemPhotos: [],
        itemPrice: 0,
        customerRatings: 0,
        customerRatingAvg: 0
      }
    ],
    currentLocation: {
      location: {
        lat: null,
        lng: null
      },
      departureTime: 0
    },
    nextLocation: {
      location: {
        lat: null,
        lng: null
      },
      arrivalTime: 0,
      departureTime: 0
    }
  }
};

export const OperatorReducer = (state = OperatorInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
