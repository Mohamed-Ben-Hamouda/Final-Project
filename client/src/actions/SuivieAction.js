import {
  ADD_SUIVIE,
  GET_SUIVIE,
  SUIVIE_ERROR,
  SAVE_SUIVIE,
  CLEAR_SUIVIE,
  UPDATE_SUIVIE,
} from "./types";
import axios from "axios";

export const getSuivie = (id) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .get(`/api/suivie/${id}`, config)
    .then((res) =>
      dispatch({
        type: GET_SUIVIE,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: SUIVIE_ERROR,
        payload: err.response.msg,
      })
    );
};

export const addSuivie = (newSuivie, id) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios.post(`/api/suivie/${id}`, newSuivie, config).then((res) =>
    dispatch({
      type: ADD_SUIVIE,
      payload: res.data,
    })
  );
};
//     .catch((err) =>
//       dispatch({
//         type: SUIVIE_ERROR,
//         payload: err.response.data.msg,
//       })
//     );

export const editSuivie = (updatedSuivie) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .put(`/api/suivie/${updatedSuivie._id}`, updatedSuivie, config)
    .then((res) =>
      dispatch({
        type: UPDATE_SUIVIE,
        payload: updatedSuivie,
      })
    )
    .catch((err) =>
      dispatch({
        type: SUIVIE_ERROR,
        payload: err.response.msg,
      })
    );
};

export const saveSuivie = (suivie) => (dispatch) => {
  dispatch({
    type: SAVE_SUIVIE,
    payload: suivie,
  });
};
export const clearSuivie = () => (dispatch) => {
  dispatch({
    type: CLEAR_SUIVIE,
  });
};
