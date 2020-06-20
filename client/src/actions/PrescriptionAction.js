import {
  ADD_PRESCRIPTION,
  GET_PRESCRIPTION,
  PRESCRIPTION_ERROR,
} from "./types";
import axios from "axios";

export const getPrescription = () => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .get("/api/prescrition", config)
    .then((res) =>
      dispatch({
        type: GET_PRESCRIPTION,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: PRESCRIPTION_ERROR,
        payload: err.response.msg,
      })
    );
};

export const addPrescription = (newPrescription, idPatient) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post(`/api/prescription/${idPatient}`, newPrescription, config)
    .then((res) =>
      dispatch({
        type: ADD_PRESCRIPTION,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: PRESCRIPTION_ERROR,
        payload: err.response.data.msg,
      })
    );
};
