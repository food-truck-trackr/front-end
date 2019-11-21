import React, { useState } from "react";
import TruckFormCurrentLocation from "./TruckFormCurrentLocation";
import TruckFormNextLocation from "./TruckFormNextLocation";
import EditTruckFormLocation from "./EditTruckFormLocation";
// import axiosWithAuth from '../../utils/AxiosWithAuth';

import {
  FormDiv,
  H1,
  CustomInput,
  CustomBtn,
  AddTruckCard
} from "../styles/StyledComponents";

const EditTruckForm = props => {
  const [currentLocation, setCurrentLocation] = useState(""); // this would be displayed
  const [nextLocation, setNextLocation] = useState("");
  const [currentCoordinates, setCurrentCoordinates] = useState({}); // this would go to the backend
  const [nextCoordinates, setNextCoordinates] = useState({});

  const [truck, setTruck] = useState({
    name: props.history.location.state.name,
    cuisine: "",
    currentLocation: props.history.location.state.currentLocation,
    departureTime: "",
    arrivalTime: ""
  });

  const handleChanges = e => {
    setTruck({
      ...truck,
      [e.target.name]: e.target.value,
      currentLocation: currentLocation
    });
  };

  const submitForm = e => {
    e.preventDefault();
    console.log(truck);
  };

  return (
    <FormDiv>
      <form onSubmit={submitForm}>
        <H1>Truck Operator: Add your truck info here!</H1>

        <CustomInput
          placeholder="Truck Name"
          id="name"
          type="text"
          name="name"
          onChange={handleChanges}
          value={truck.name}
        />

        <h3>What type of cuisine do you offer?</h3>
        <select
          name="cuisine"
          id="cuisine"
          onChange={handleChanges}
          value={truck.cuisine}
        >
          <option value="">Please Select a Cuisine Type</option>
          <option value="bbq">BBQ</option>
          <option value="beer">Beer</option>
          <option value="breakfast">Breakfast</option>
          <option value="burgers">Burgers</option>
          <option value="dessert">Dessert</option>
          <option value="greek">Greek</option>
          <option value="pizza">Pizza</option>
          <option value="tacos">Tacos</option>
        </select>

        <h3>What is the current location of your truck?</h3>
        <EditTruckFormLocation
          setCurrentLocation={setCurrentLocation}
          loc={currentLocation}
          setCurrentCoordinates={setCurrentCoordinates}
        />

        <h3>When will you be leaving for your next location?</h3>

        <CustomInput
          placeholder="Departure Time"
          id="departureTime"
          type="time"
          name="departureTime"
          onChange={handleChanges}
          value={truck.departureTime}
        />
        <h3>What is the next location of your truck?</h3>
        <TruckFormNextLocation
          setNextLocation={setNextLocation}
          nextLocation={nextLocation}
          setNextCoordinates={setNextCoordinates}
        />

        <h3>When will you be arriving at your next location?</h3>

        <CustomInput
          placeholder="Arrival Time"
          id="arrivalTime"
          type="time"
          name="arrivalTime"
          onChange={handleChanges}
          value={truck.arrivalTime}
        />

        <CustomBtn type="submit">Submit Your Truck Info!</CustomBtn>
      </form>

      <AddTruckCard>
        <p>Name: {truck.name}</p>
        <p>Cuisine type: {truck.cuisine}</p>
        <p>Current Location: {currentLocation}</p>
        <p>Departure time: {truck.departureTime}</p>
        <p>Next Location: {nextLocation}</p>
        <p>Arrival time: {truck.arrivalTime}</p>
      </AddTruckCard>

      <a href="/MenuForm">
        <CustomBtn>Go to menu entry form!</CustomBtn>
      </a>
    </FormDiv>
  );
};

export default EditTruckForm;
