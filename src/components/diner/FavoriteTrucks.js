import React from "react";
import { connect } from "react-redux";
import MiniTruck from "./../trucks/MiniTruck";

const FavoriteTrucks = props => {
  return (
    <div className="favorite-trucks">
      {props.favTrucks.map(truck => {
        return <MiniTruck key={truck.id} truck={truck} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    favTrucks: state.diner.favoriteTrucks
  };
};

export default connect(mapStateToProps, {})(FavoriteTrucks);
