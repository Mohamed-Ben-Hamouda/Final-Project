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
  UPDATE_INFERMIER,
  DELETE_INFERMIER,
  ADD_INFERMIER,
  INFERMIER_INFOS,
  GET_PATIENT_INF
} from "../actions/types";

const initialstate = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  user: null,
  error: null,
  patient: null,
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
        error: null,
        isAuthenticated: true,
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

    case INFERMIER_INFOS:
      return {
        ...state,
        infermier: action.payload
      }
    case DELETE_INFERMIER:
      return {
        ...state,
        user: {
          ...state.user, infermier: state.user.infermier.filter(el => el._id !== action.payload)
        }
      }
    case ADD_INFERMIER:
      return {
        ...state,
        user: {
          ...state.user, infermier: state.user.infermier.concat(action.payload)
        }

      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case UPDATE_INFERMIER:
      return {
        ...state,
        user: { ...state.user, infermier: state.user.infermier.map(el => el._id === action.payload.id ? action.payload : el) }
      }

    default:
      return state;
  }
};

export default AuthReducer;
