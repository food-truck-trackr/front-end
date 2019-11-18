import React, { useEffect } from "react";
import { GoogleMap, withGoogleMap } from "react-google-maps";

const Map = props => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      props.setCenter(pos);
    });
  }, []);

  return (
    <GoogleMap
      defaultZoom={14}
      center={props.center}
      defaultOptions={{
        disableDefaultUI: true
      }}
    ></GoogleMap>
  );
};

const TruckMap = withGoogleMap(Map);

export default TruckMap;
