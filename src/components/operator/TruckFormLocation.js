import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { classnames } from "./../../utils/helpers";

const TruckFormLocation = props => {
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState({});

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setLocation(value); // this is the human readable address that will be displayed on the truck card
    setCoordinates(latLng); // this object contains the latitude and longitude that needs to be sent to the backend
  };

  const searchOptions = {
    types: ["address"]
  };

  return (
    <div className="search">
      <PlacesAutocomplete
        value={location}
        onChange={setLocation}
        onSelect={handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="Demo__search-bar-container">
            <>
              <input
                {...getInputProps({
                  placeholder: "Search by location..."
                })}
                inputProps={{ "aria-label": "search google maps" }}
              />
            </>
            {suggestions.length > 0 && (
              <div className="Demo__autocomplete-container">
                {suggestions.map(suggestion => {
                  const className = classnames("Demo__suggestion-item", {
                    "Demo__suggestion-item--active": suggestion.active
                  });

                  return (
                    <div {...getSuggestionItemProps(suggestion, { className })}>
                      <strong>{suggestion.formattedSuggestion.mainText}</strong>{" "}
                      <small>
                        {suggestion.formattedSuggestion.secondaryText}
                      </small>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default TruckFormLocation;