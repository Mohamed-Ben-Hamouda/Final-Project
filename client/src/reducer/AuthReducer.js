import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  CLEAR_ERROR,
  LOGOUT,
  REMOVE_ALERT,
  USER_LOADED,
  ADD_PATIENT,
} from "../actions/types";

const initialstate = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  user: null,
  error: null,
};

const AuthReducer = (state = initialstate, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload, //{'token:nuhnnuhnuuhnu}
        isAuthenticated: true,
        error: null,
      };
    case LOGIN_FAIL:
    case LOGOUT:
    case AUTH_ERROR:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        role: null,
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case ADD_PATIENT:
      return {
        ...state,
        user: {
          ...state.user,
          patient: [...state.user.patient, action.payload],
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;
