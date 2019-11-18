import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

const AddressAutocomplete = props => {
  const [location, setLocation] = useState("");

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setLocation(value);
    props.setCenter(latLng);
  };

  const searchOptions = {
    types: ["(cities)"]
  };

  return (
    <>
      <PlacesAutocomplete
        value={location}
        onChange={setLocation}
        onSelect={handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="search-container">
            <label htmlFor="search"></label>
            <div className="search-wrapper">
              <input
                className="search"
                name="search"
                placeholder="Enter location"
                {...getInputProps()}
              />
            </div>
            {suggestions.length > 0 && (
              <div className="suggestions-box">
                {loading ? <div>...loading</div> : null}

                {suggestions.map(suggestion => {
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion)}
                      className="suggestions"
                    >
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </PlacesAutocomplete>
    </>
  );
};

export default AddressAutocomplete;
