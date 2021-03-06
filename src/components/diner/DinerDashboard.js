import React, { useState, useEffect } from "react";
import AddressAutocomplete from "../../maps/AddressAutocomplete";
import { connect } from "react-redux";
import TruckMap from "../../maps/TruckMap";
import { getCurrentLocation } from "./../../store/diner/DinerActions";

const DinerDashBoard = props => {
  //make get request for all trucks. pass down array as props to truckMap and to truckList
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
      <AddressAutocomplete currentLocation={currentLocation} />
      <TruckMap
        className="map"
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiUrl}`}
        loadingElement={<div style={{ height: "55vh" }} />}
        containerElement={<div style={{ height: "55vh" }} />}
        mapElement={<div style={{ height: "55vh" }} />}
        center={center}
        setCenter={setCenter}
      />
      {/* if array of trucks.length > 0, then display view as list*/}
    </div>
  );
};

export default connect(null, { getCurrentLocation })(DinerDashBoard);
