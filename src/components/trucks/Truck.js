import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import placeholderTruck from "./../../assets/placeholder-truck.jpg";
import { trucks } from "./../../dummydata";
import clsx from "clsx";
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
import { connect } from "react-redux";
import { addFavorite } from "../../store/diner/DinerActions";
import { deleteTruck } from "../../store/operator/OperatorActions";

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

const Truck = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  console.log("props", props);

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

  //this should be pulling from all trucks array in backend
  const truck = trucks.find(truck => props.match.params.id === `${truck.id}`);

  const remove = () => {
    props.deleteTruck(truck.id);
    props.history.push("/OperatorDashboard");
  };

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
          <div className="card-location">
            <p className="bold">Current Location</p>
            <p>{address}</p>
          </div>
          <div className="customer-avg">
            <p className="avg-title">Average customer rating</p>
            <CustomerRatingAvg />
          </div>
          {props.role === "diner" && (
            <div class-name="card-rate-heart">
              <div className="user-rate">
                <p className="rate-title">Add your rating</p>
                <CustomerRating />
              </div>
              <Fav truck={truck} />
            </div>
          )}
          {props.role === "operator" && (
            <div className="edit-delete-buttons">
              <Link to="/AddTruckForm">
                <Button className="edit-btn" color="primary">
                  Edit Truck
                </Button>
              </Link>
              <Button className="delete-btn" color="secondary" onClick={remove}>
                Delete Truck
              </Button>
            </div>
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
                <ul key={food.item} className="menu-item">
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

export default connect(mapStateToProps, { addFavorite, deleteTruck })(Truck);
