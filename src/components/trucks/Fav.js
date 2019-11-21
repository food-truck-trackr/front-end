import React, { useState } from "react";

const Fav = ({ className }) => {
  const [fav, setFav] = useState(false);

  const makeFavorite = () => {
    // dispatch({ type: ADD_FAVORITE, payload: truck });
    setFav(!fav);
    console.log("clicked");
  };

  return (
    <div>
      {fav ? (
        <i className="fas fa-heart" onClick={makeFavorite}></i>
      ) : (
        <i className="far fa-heart" onClick={makeFavorite}></i>
      )}
    </div>
  );
};

export default Fav;
