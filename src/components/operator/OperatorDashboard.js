import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";

const OperatorDashboard = () => {
  return (
=======
import { Route, Link } from "react-router-dom";
import Truck from "../trucks/Truck";
import MiniTruck from "../trucks/MiniTruck";
import { trucks } from "../../dummydata";

const OperatorDashboard = () => {
  return(
  <div>
>>>>>>> f20b39d63ddb3cd2ab719a84be69167bf29c205a
    <div>
      <div>
        {/* Build Truck "Cards" from truck.js with uploaded truck image 
    git request to pul operator.id and bring trucks as array 
<<<<<<< HEAD
    and then map to display minitrucks.js*/}
      </div>

      {/* Link to addtruckform.js <Link>
    <button type="submit">Add Truck</button>
    </Link> */}
    </div>
  );
=======
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
>>>>>>> f20b39d63ddb3cd2ab719a84be69167bf29c205a
};

export default OperatorDashboard;
