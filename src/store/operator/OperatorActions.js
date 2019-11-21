// Action Types
import { DELETE_TRUCK } from "./OperatorTypes";

export const deleteTruck = truckId => {
  return { type: DELETE_TRUCK, payload: truckId };
};
