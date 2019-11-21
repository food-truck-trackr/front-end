import React from "react";
import { Link } from "react-router-dom";
import MiniTruck from "../trucks/MiniTruck";
import { connect } from "react-redux";

const OperatorDashboard = props => {
  return (
    <div>
      <div>
        {props.trucks.map(truck => {
          return <MiniTruck key={truck.id} truck={truck} />;
        })}
      </div>
      <Link to="/AddTruckForm">Add Truck</Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    trucks: state.operator.trucksOwned
  };
};

export default connect(mapStateToProps, {})(OperatorDashboard);
