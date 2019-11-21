import React from "react";
import { favTrucks } from "./../../dinerdummydata";
import MiniTruck from "./../trucks/MiniTruck";

const FavoriteTrucks = () => {
  return (
    <div className="favorite-trucks">
      {favTrucks.map(truck => {
        return <MiniTruck key={truck.id} truck={truck} />;
      })}
    </div>
  );
};

export default FavoriteTrucks;
