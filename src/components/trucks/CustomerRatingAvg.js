import React from "react";
import Ratings from "react-ratings-declarative";

const CustomerRatingAvg = () => {
  return (
    <div>
      <h3>Avg Rating:</h3>
      <Ratings
        rating={3.2} //we get this from customer rating average for this truck
        widgetRatedColors="rgb(189,237,253)"
      >
        <Ratings.Widget widgetHoverColor="rgb(189,237,253)" />
        <Ratings.Widget widgetHoverColor="rgb(189,237,253)" />
        <Ratings.Widget widgetHoverColor="rgb(189,237,253)" />
        <Ratings.Widget widgetHoverColor="rgb(189,237,253)" />
        <Ratings.Widget widgetHoverColor="rgb(189,237,253)" />
      </Ratings>
      <p>total number of ratings</p>
    </div>
  );
};

export default CustomerRatingAvg;
