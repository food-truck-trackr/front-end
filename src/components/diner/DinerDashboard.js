import React, { useState, useEffect } from "react";
import AddressAutocomplete from "./maps/AddressAutocomplete";
import TruckMap from "./maps/TruckMap";
import FavoriteTrucks from "./FavoriteTrucks";
import Truck from "./../trucks/Truck";
import MiniTruck from "./../trucks/MiniTruck";

const DinerDashBoard = () => {
  const apiUrl = "AIzaSyAxYI7Q1dv5IBOpnPxezE78oZnYcdGDmug";
  const [center, setCenter] = useState({ lat: 33.8938, lng: 35.5018 }); //this goes to the backend

  useEffect(() => {
    //dispatch action to update currentLocation
  }, [center]);

  return (
    <div>
      <Truck />
      <MiniTruck />
      <AddressAutocomplete setCenter={setCenter} />
      <TruckMap
        className="map"
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiUrl}`}
        loadingElement={<div style={{ height: "50vh" }} />}
        containerElement={<div style={{ height: "50vh" }} />}
        mapElement={<div style={{ height: "50vh" }} />}
        center={center}
        setCenter={setCenter}
      />
      <FavoriteTrucks />
    </div>
  );
};

export default DinerDashBoard;
