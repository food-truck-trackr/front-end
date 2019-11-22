import React from "react";
import { Link } from "react-router-dom";
import MiniTruck from "../trucks/MiniTruck";
import { connect } from "react-redux";

const OperatorDashboard = props => {
  return (
    <div className="dashboard">
      {props.trucks.map(truck => {
        return <div className="cards"><MiniTruck key={truck.id} truck={truck} /></div>;
      })}
      <div className="link-div">
        <Link className="link" to="/AddTruckForm">Add New Truck</Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    trucks: state.operator.trucksOwned
  };
};

export default connect(mapStateToProps, {})(OperatorDashboard);
