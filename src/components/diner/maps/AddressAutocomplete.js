import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { classnames } from "./../../../utils/helpers";

const AddressAutocomplete = props => {
  const [location, setLocation] = useState("");

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setLocation(value);
    props.setCenter(latLng);
  };

  const searchOptions = {
    types: ["address"]
  };

  const closeClick = () => {
    setLocation("");
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
            <div className="Demo__search-input-container">
              <input
                {...getInputProps({
                  placeholder: "Search Places...",
                  className: "Demo__search-input"
                })}
              />
              {location.length > 0 && (
                // <i
                //   class="fas fa-times"
                //   className="Demo__clear-button"
                //   onClick={closeClick}
                // ></i>
                <button className="Demo__clear-button" onClick={closeClick}>
                  x
                </button>
              )}
            </div>
            {suggestions.length > 0 && (
              <div className="Demo__autocomplete-container">
                {suggestions.map(suggestion => {
                  const className = classnames("Demo__suggestion-item", {
                    "Demo__suggestion-item--active": suggestion.active
                  });

                  return (
                    /* eslint-disable react/jsx-key */
                    <div {...getSuggestionItemProps(suggestion, { className })}>
                      <strong>{suggestion.formattedSuggestion.mainText}</strong>{" "}
                      <small>
                        {suggestion.formattedSuggestion.secondaryText}
                      </small>
                    </div>
                  );
                  /* eslint-enable react/jsx-key */
                })}
                <div className="Demo__dropdown-footer">
                  <div>
                    {/* <img
                    src={require('../images/powered_by_google_default.png')}
                    className="Demo__dropdown-footer-image"
                  /> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default AddressAutocomplete;

/* <div className="search-container">
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
          </div> */
