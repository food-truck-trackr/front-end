import React, { useState, useEffect } from "react";
import AddressAutocomplete from "../../maps/AddressAutocomplete";
import { connect } from "react-redux";
import TruckMap from "../../maps/TruckMap";
import FavoriteTrucks from "./FavoriteTrucks";
import Truck from "./../trucks/Truck";
import MiniTruck from "./../trucks/MiniTruck";
import { getCurrentLocation } from "./../../store/diner/DinerActions";

const DinerDashBoard = props => {
  const apiUrl = "AIzaSyAxYI7Q1dv5IBOpnPxezE78oZnYcdGDmug";
  const [center, setCenter] = useState({});

  let currentLocation = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      props.getCurrentLocation(pos);
    });
  };

  useEffect(() => {
    currentLocation();
  }, []);

  return (
    <div>
      <Truck />
      <MiniTruck />
      <AddressAutocomplete
        setCenter={setCenter}
        currentLocation={currentLocation}
      />
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

export default connect(null, { getCurrentLocation })(DinerDashBoard);
