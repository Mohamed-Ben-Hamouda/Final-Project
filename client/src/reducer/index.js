import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import AlertReducer from "./AlertReducer";
import PatientReducer from "./PatientReducer";

export default combineReducers({
  auth: AuthReducer,
  alert: AlertReducer,
  patient: PatientReducer,
});
