import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GoogleMap,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { connect } from "react-redux";
import { getCurrentLocation } from "./../store/diner/DinerActions";
import { trucks } from "../dummydata";

const Map = props => {
  const [selectedTruck, setSelectedTruck] = useState(null);

  return (
    <GoogleMap
      defaultZoom={13}
      center={props.currentLocation}
      defaultOptions={{
        disableDefaultUI: true
      }}
    >
      {trucks.map(truck => {
        return (
          <Marker
            key={truck.id}
            position={{
              lat: truck.currentLocation.lat,
              lng: truck.currentLocation.lng
            }}
            onClick={() => {
              setSelectedTruck(truck);
            }}
          />
        );
      })}
      {selectedTruck && (
        <InfoWindow
          position={{
            lat: selectedTruck.currentLocation.lat,
            lng: selectedTruck.currentLocation.lng
          }}
          onCloseClick={() => setSelectedTruck(null)}
        >
          <div>
            <h2>{selectedTruck.truckName}</h2>
            <p>{selectedTruck.cuisine}</p>
            <Link to={`/truck/${selectedTruck.id}`}>View Truck</Link>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const TruckMap = withGoogleMap(Map);

const mapStateToProps = state => {
  return {
    currentLocation: state.diner.currentLocation
  };
};

export default connect(mapStateToProps, { getCurrentLocation })(TruckMap);
