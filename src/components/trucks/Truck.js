import React, { useState } from "react";
import placeholderTruck from "./../../assets/placeholder-truck.jpg";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CustomerRating from "../diner/CustomerRating";
import CustomerRatingAvg from "./CustomerRatingAvg";
import Fav from "./Fav";

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

const Truck = () => {
  const [fav, setFav] = useState(false);
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const makeFavorite = () => {
    // where to get truck object from?
    // dispatch({ type: ADD_FAVORITE, payload: truck });
    setFav(!fav);
    console.log("clicked");
  };

  return (
    <Card className="truck-card">
      <CardHeader title="Angelina's Tacos" subheader="Cuisine: tacos" />
      <CardMedia
        className={classes.media}
        image={placeholderTruck}
        title="Angelina's Tacos truck"
      />
      <div className="card-info">
        <CardContent>
          <p>Average customer rating</p>
          {/*conditional: if there is no departure time, just return current location, otherwise return
          
          */}
          <p>address</p>

          <Fav />
          <CustomerRating />
          <CustomerRatingAvg />
        </CardContent>
      </div>
      <div className="card-menu">
        <CardActions disableSpacing>
          <p>some text</p>
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
            <h3>Menu</h3>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
            </ul>
          </CardContent>
        </Collapse>
      </div>
    </Card>
  );
};

export default Truck;
