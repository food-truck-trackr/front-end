import React, { useEffect } from "react";
import { GoogleMap, withGoogleMap } from "react-google-maps";
import { connect } from "react-redux";
import { getCurrentLocation } from "./../store/diner/DinerActions";

const Map = props => {
  //move this to actions
  // useEffect(() => {
  //   props.getCurrentLocation();
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     var pos = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude
  //     };
  //     props.getCurrentLocation(pos);
  //   });
  // }, []);

  return (
    <GoogleMap
      defaultZoom={14}
      center={props.currentLocation}
      defaultOptions={{
        disableDefaultUI: true
      }}
    ></GoogleMap>
  );
};

const TruckMap = withGoogleMap(Map);

const mapStateToProps = state => {
  return {
    currentLocation: state.diner.currentLocation
  };
};

export default connect(mapStateToProps, { getCurrentLocation })(TruckMap);
