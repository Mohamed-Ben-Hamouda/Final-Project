import {
  ADD_SOIN,
  GET_SOIN,
  SOIN_ERROR,
  CLEAR_SOIN,
  UPDATE_SOIN,
  SAVE_SOIN,
} from "../actions/types";
const initialState = {
  soins: [],
  saved: null,
  error: null,
};
const SoinReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SOIN:
      return {
        ...state,
        soins: action.payload,
      };
    case ADD_SOIN:
      return {
        ...state,
        soins: [action.payload, ...state.soins],
      };
    case SOIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SAVE_SOIN:
      return {
        ...state,
        saved: action.payload,
      };
    case UPDATE_SOIN:
      return {
        ...state,
        soins: state.soins.map((el) =>
          el._id === action.payload._id ? action.payload : el
        ),
      };
    case CLEAR_SOIN:
      return {
        ...state,
        saved: null,
      };
    default:
      return state;
  }
};
export default SoinReducer;



