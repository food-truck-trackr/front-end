import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Typography,
  Button,
  CardMedia,
  CardContent
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import placeholderTruck from "./../../assets/placeholder-truck.jpg";
import Ratings from "react-ratings-declarative";
import { removeFav } from "../../store/diner/DinerActions";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    width: "400px",
    margin: "30px"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

const MiniTruck = props => {
  const classes = useStyles();
  const theme = useTheme();

  const [fav, setFav] = useState(false);

  const removeFavorite = () => {
    props.removeFav(props.truck.id);
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={placeholderTruck}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.truck.truckName}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.truck.cuisine}
          </Typography>
        </CardContent>
        <CardContent>
          <div className="mini-ratings-fav">
            <Ratings
              rating={props.truck.truckRating} //we get this from customer rating average for this truck
              widgetRatedColors="rgb(189,237,253)"
            >
              <Ratings.Widget
                widgetHoverColor="rgb(189,237,253)"
                widgetDimension="20px"
              />
              <Ratings.Widget
                widgetHoverColor="rgb(189,237,253)"
                widgetDimension="20px"
              />
              <Ratings.Widget
                widgetHoverColor="rgb(189,237,253)"
                widgetDimension="20px"
              />
              <Ratings.Widget
                widgetHoverColor="rgb(189,237,253)"
                widgetDimension="20px"
              />
              <Ratings.Widget
                widgetHoverColor="rgb(189,237,253)"
                widgetDimension="20px"
              />
            </Ratings>
          </div>
          <div className="link-fav">
            <Link to={`/truck/${props.truck.id}`}>
              <Button
                color="primary"
                variant="contained"
                className="view-truck-button"
              >
                View Truck
              </Button>
            </Link>
            {props.role === "diner" && (
              <i className="fas fa-heart" onClick={removeFavorite}></i>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    role: state.auth.role
  };
};

export default connect(mapStateToProps, { removeFav })(MiniTruck);
