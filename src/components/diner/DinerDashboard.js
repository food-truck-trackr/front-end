import React, { useState } from "react";
import CustomerRating from "./CustomerRating";
import AddressAutocomplete from "./maps/AddressAutocomplete";
import TruckMap from "./maps/TruckMap";
import FavoriteTrucks from "./FavoriteTrucks";

const DinerDashBoard = () => {
  const apiUrl = "AIzaSyAxYI7Q1dv5IBOpnPxezE78oZnYcdGDmug";
  const [center, setCenter] = useState({ lat: 33.8938, lng: 35.5018 });
  return (
    <div>
      <CustomerRating />
      <AddressAutocomplete setCenter={setCenter} />
      <TruckMap
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
