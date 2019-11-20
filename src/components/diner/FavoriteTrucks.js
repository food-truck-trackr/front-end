import React from "react";
import { favTrucks } from "./../../dummydata";
import Truck from "./../trucks/MiniTruck";

const FavoriteTrucks = () => {
  return (
    <div className="favorite-trucks">
      {favTrucks.map(truck => {
        return <Truck key={truck.id} truck={truck} />;
      })}
    </div>
  );
};

export default FavoriteTrucks;
