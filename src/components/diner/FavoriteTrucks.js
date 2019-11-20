import React from "react";
import { trucks } from "./../../dummydata";
import MiniTruck from "./../trucks/MiniTruck";

const FavoriteTrucks = () => {
  return (
    <div className="favorite-trucks">
      {trucks.map(truck => {
        return <MiniTruck key={truck.id} truck={truck} />;
      })}
    </div>
  );
};

export default FavoriteTrucks;
