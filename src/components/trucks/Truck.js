import React, { useState, useEffect } from "react";
import axios from "axios";
import placeholderTruck from "./../../assets/placeholder-truck.jpg";
import { trucks } from "./../../dummydata";
import clsx from "clsx";
// import { makeStyles } from "@material-ui/core/styles";
import {
  makeStyles,
  Card,
  Button,
  CardHeader,
  CardMedia,
  CardContent,
  Collapse,
  CardActions,
  IconButton
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CustomerRating from "../diner/CustomerRating";
import CustomerRatingAvg from "./CustomerRatingAvg";
import Fav from "./Fav";
import { dispatch } from "rxjs/internal/observable/pairs";
import { connect } from "react-redux";
import { addFavorite } from "../../store/diner/DinerActions";

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));

const apiUrl = "AIzaSyAxYI7Q1dv5IBOpnPxezE78oZnYcdGDmug";

const Truck = props => {
  const [fav, setFav] = useState(false);
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const [address, setAddress] = useState("");
  const apiUrl = "AIzaSyAxYI7Q1dv5IBOpnPxezE78oZnYcdGDmug";
  const reverseGeocode = (lat, lng) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiUrl}`
      )
      .then(res => {
        setAddress(res.data.results[0].formatted_address);
      })
      .catch(err => console.log(err));
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const truck = trucks.find(truck => props.match.params.id === `${truck.id}`);

  // const makeFavorite = truck => {
  //   setFav(!fav);
  //   dispatch({ type: ADD_FAVORITE });
  // };

  useEffect(() => {
    console.log(
      reverseGeocode(truck.currentLocation.lat, truck.currentLocation.lng)
    );
  }, []);

  return (
    <Card className="truck-card">
      <CardHeader title={truck.truckName} subheader={truck.cuisine} />
      <CardMedia
        className={classes.media}
        image={placeholderTruck}
        title={truck.truckName}
      />
      <div className="card-info">
        <CardContent>
          <p>{address}</p>
          <p>Average customer rating</p>

          <CustomerRatingAvg />

          {props.role === "diner" && (
            <>
              <CustomerRating />
              <Fav truck={truck} />
            </>
          )}
        </CardContent>
      </div>
      <div className="card-menu">
        <CardActions disableSpacing>
          <Button className="view-menu-button" onClick={handleExpandClick}>
            View Menu
          </Button>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {truck.truckMenu.map(food => {
              return (
                <ul className="menu-item">
                  <div className="foodname-description">
                    <li>{food.item}</li>
                    <li className="description">{food.description}</li>
                  </div>
                  <li>{food.price}</li>
                </ul>
              );
            })}
          </CardContent>
        </Collapse>
      </div>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    role: state.auth.role
  };
};

export default connect(mapStateToProps, { addFavorite })(Truck);
