import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import placeholderTruck from "./../../assets/placeholder-truck.jpg";
import Ratings from "react-ratings-declarative";
import Fav from "./Fav";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    width: "400px"
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

const MiniTruck = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [fav, setFav] = useState(false);

  const makeFavorite = () => {
    // where to get truck object from?
    // dispatch({ type: ADD_FAVORITE, payload: truck });
    setFav(!fav);
    console.log("clicked");
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
            Angelina's Tacos
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Tacos
          </Typography>
        </CardContent>
        <CardContent>
          <Ratings
            rating={3.2} //we get this from customer rating average for this truck
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
          <Fav />
        </CardContent>
      </div>
    </Card>
  );
};

export default MiniTruck;
