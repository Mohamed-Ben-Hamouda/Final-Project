import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import AlertReducer from "./AlertReducer";
import InfermierReducer from './InfermierReducer'
import PatientReducer from "./PatientReducer";
import SuivieReducer from "./SuivieReducer";
import SoinReducer from "./SoinReducer";
import PrescriptionReducer from "./PrescriptionReducer";
import TestCovidReducer from "./TestCovidReducer";

export default combineReducers({
    infermier: InfermierReducer,
    auth: AuthReducer,
    patient: PatientReducer,
    alert: AlertReducer,
    suivie: SuivieReducer,
    soin: SoinReducer,
    prescription: PrescriptionReducer,
    testCovid: TestCovidReducer,
});

