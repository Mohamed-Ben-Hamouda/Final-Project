import {
  GET_PATIENT,
  GET_PATIENT_INF,
  ADD_PATIENT,
  UPDATE_PATIENT,
  SAVE_PATIENT,
  CLEAR_PATIENT,
  PATIENT_ERROR,
  REMOVE_CURRENT_PATIENT,
} from "../actions/types";

const initialState = {
  patient: [],
  saved: null,
  error: null,
};

const PatientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PATIENT:
      return {
        ...state,
        patient: action.payload,
      };
    case GET_PATIENT_INF:
      return {
        ...state,
        patient: action.payload,
      };

    case ADD_PATIENT:
      return {
        ...state,
        patient: [action.payload, ...state.patient],
      };

    case SAVE_PATIENT:
      return {
        ...state,
        saved: action.payload,
      };
    case UPDATE_PATIENT:
      return {
        ...state,
        patient: state.patient.map((el) =>
          el._id === action.payload._id ? action.payload : el
        ),
      };
    case CLEAR_PATIENT:
      return {
        ...state,
        saved: null,
      };
    case PATIENT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case REMOVE_CURRENT_PATIENT:
      return {
        ...state,
        patient: [],
      };
    default:
      return state;
  }
};

export default PatientReducer;
