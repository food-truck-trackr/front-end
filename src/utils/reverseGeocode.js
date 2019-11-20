import axios from "axios";

const apiUrl = "AIzaSyAxYI7Q1dv5IBOpnPxezE78oZnYcdGDmug";

const reverseGeocode = latlng => {
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiUrl}`
    )
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export default reverseGeocode;
