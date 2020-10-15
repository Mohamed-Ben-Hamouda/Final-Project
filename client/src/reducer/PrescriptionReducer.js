import {
  ADD_PRESCRIPTION,
  GET_PRESCRIPTION,
  PRESCRIPTION_ERROR,
} from "../actions/types";

const initialState = {
  prescription: [],
};

const PrescriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRESCRIPTION:
      return {
        ...state,
        prescription: action.payload,
      };

    case ADD_PRESCRIPTION:
      return {
        ...state,
        prescription: [action.payload, ...state.prescription],
      };
    case PRESCRIPTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default PrescriptionReducer;
