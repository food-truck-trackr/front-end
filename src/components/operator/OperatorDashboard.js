import React from "react";
import { Route, Link } from "react-router-dom";
import Truck from "../trucks/Truck";
import MiniTruck from "../trucks/MiniTruck";
import { trucks } from "../../dummydata";

const OperatorDashboard = () => {
  return(
  <div>
    <div>
    {/* Build Truck "Cards" from truck.js with uploaded truck image 
    git request to pul operator.id and bring trucks as array 
    and then map to display minitruck.js*/}
    {trucks.map(truck => {
      return <MiniTruck truck={truck}/>
    })}
  
    </div>
    <Link to="/AddTruckForm">Add Truck</Link>
    {/* Link to addtruckform.js <Link>
    <button type="submit">Add Truck</button>
    </Link> */}

  </div>
  )
};


export default OperatorDashboard