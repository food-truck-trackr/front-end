import React, { useState } from "react";

const Fav = () => {
  const [fav, setFav] = useState(false);

  const makeFavorite = () => {
    // where to get truck object from?
    // dispatch({ type: ADD_FAVORITE, payload: truck });
    setFav(!fav);
    console.log("clicked");
  };

  return (
    <div>
      {/* map over truck array from store. If truck ID matches this trucks ID, then display full heart. otherwise display empty heart */}
      {fav ? (
        <i className="fas fa-heart" onClick={makeFavorite}></i>
      ) : (
        <i className="far fa-heart" onClick={makeFavorite}></i>
      )}
    </div>
  );
};

export default Fav;
