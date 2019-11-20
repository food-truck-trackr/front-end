import React, { useState } from "react";
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
  return (
    <GoogleMap
      defaultZoom={15}
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
          />
        );
      })}
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
