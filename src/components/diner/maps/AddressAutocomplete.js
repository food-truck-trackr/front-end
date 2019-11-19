import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { classnames } from "./../../../utils/helpers";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DirectionsIcon from "@material-ui/icons/Directions";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "0 20px 0 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 460
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: "400px"
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

const AddressAutocomplete = props => {
  const [location, setLocation] = useState("");
  const classes = useStyles();

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
            <>
              <Paper component="form" className={classes.root}>
                <InputBase
                  {...getInputProps({
                    placeholder: "Search by location..."
                  })}
                  inputProps={{ "aria-label": "search google maps" }}
                />
                <div className="search-bar-icons">
                  <Divider className={classes.divider} orientation="vertical" />
                  <IconButton
                    color="primary"
                    className={classes.iconButton}
                    aria-label="directions"
                    // onClick={props.setCenter}
                  >
                    <DirectionsIcon />
                  </IconButton>
                </div>
              </Paper>
            </>
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
