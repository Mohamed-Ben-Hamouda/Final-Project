import {
  ADD_SUIVIE,
  GET_SUIVIE,
  UPDATE_SUIVIE,
  SAVE_SUIVIE,
  CLEAR_SUIVIE,
  SUIVIE_ERROR,
} from "../actions/types";
const initialState = {
  suivies: [],
  saved: null,
  error: null,
};
const SuivieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUIVIE:
      return {
        ...state,
        suivies: action.payload,
      };
    case ADD_SUIVIE:
      return {
        ...state,
        suivies: [action.payload, ...state.suivies],
      };
    case SUIVIE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SAVE_SUIVIE:
      return {
        ...state,
        saved: action.payload,
      };
    case CLEAR_SUIVIE:
      return {
        ...state,
        saved: null,
      };
    case UPDATE_SUIVIE:
      return {
        ...state,
        suivies: state.suivies.map((el) =>
          el._id === action.payload._id ? action.payload : el
        ),
      };
    default:
      return state;
  }
};
export default SuivieReducer;
