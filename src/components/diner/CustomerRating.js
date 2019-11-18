import React, { useState } from "react";
import Ratings from "react-ratings-declarative";

const CustomerRating = () => {
  const [rating, setRating] = useState(0);

  const changeRating = newRating => {
    setRating(newRating);
  };

  return (
    <Ratings
      rating={rating}
      widgetRatedColors="rgb(229,186,51)"
      changeRating={changeRating}
    >
      <Ratings.Widget widgetHoverColor="rgb(229,186,51)" />
      <Ratings.Widget widgetHoverColor="rgb(229,186,51)" />
      <Ratings.Widget widgetHoverColor="rgb(229,186,51)" />
      <Ratings.Widget widgetHoverColor="rgb(229,186,51)" />
    </Ratings>
  );
};

export default CustomerRating;
