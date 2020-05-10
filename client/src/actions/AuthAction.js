import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  CLEAR_ERROR,
  USER_LOADED,
  LOGOUT,
} from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
//load infermier
export const loadInfermier = () => (dispatch) => {
  //set the token inside the request's header
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  axios
    .get("/api/authInfermier")
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    )
    .catch(() =>
      dispatch({
        type: AUTH_ERROR,
      })
    );
};

//Register user
// export const register = (formData) => (dispatch) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   axios
//     .post("/api/user", formData, config)
//     .then((res) => {
//       dispatch({
//         type: REGISTER_SUCCESS,
//         payload: res.data,
//       });
//       dispatch(loadUser());
//     })
//     .catch((err) =>
//       dispatch({
//         type: REGISTER_FAIL,
//         payload: err.response.data.msg,
//       })
//     );
// };

//login infermier
export const loginInfermier = (formData) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post("/api/authInfermier", formData, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadInfermier());
    })
    .catch((err) =>
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      })
    );
};

//load medecin
export const loadMedecin = () => (dispatch) => {
  //set the token inside the request's header
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  axios
    .get("/api/authMedecin")
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    )
    .catch(() =>
      dispatch({
        type: AUTH_ERROR,
      })
    );
};

//login Medecin
export const loginMedecin = (formData) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post("/api/authMedecin", formData, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadMedecin());
    })
    .catch((err) =>
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg,
      })
    );
};

//logout user
export const Logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

//clear error
export const clearError = () => (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
};
