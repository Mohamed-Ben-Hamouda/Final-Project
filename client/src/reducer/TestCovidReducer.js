import {
  ADD_TESTCOVID,
  GET_TESTCOVID,
  TESTCOVID_ERROR,
  SAVE_TESTCOVID,
  UPDATE_TESTCOVID,
  CLEAR_TESTCOVID,
} from "../actions/types";

const initialState = {
  testCovids: [],
  saved: null,
  error: null,
};

const TestCovidReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TESTCOVID:
      return {
        ...state,
        testCovids: action.payload,
      };

    case ADD_TESTCOVID:
      return {
        ...state,
        testCovids: [action.payload, ...state.testCovids],
      };
    case TESTCOVID_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SAVE_TESTCOVID:
      return {
        ...state,
        saved: action.payload,
      };
    case UPDATE_TESTCOVID:
      return {
        ...state,
        testCovids: state.testCovids.map((el) =>
          el._id === action.payload._id ? action.payload : el
        ),
      };
    case CLEAR_TESTCOVID:
      return {
        ...state,
        saved: null,
      };
    default:
      return state;
  }
};

export default TestCovidReducer;
