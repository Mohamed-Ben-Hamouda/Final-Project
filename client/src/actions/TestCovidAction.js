import {
  ADD_TESTCOVID,
  GET_TESTCOVID,
  TESTCOVID_ERROR,
  SAVE_TESTCOVID,
  UPDATE_TESTCOVID,
  CLEAR_TESTCOVID,
} from "./types";
import axios from "axios";

export const getTestCovid = (id) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .get(`/api/covidTest/${id}`, config)
    .then((res) =>
      dispatch({
        type: GET_TESTCOVID,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: TESTCOVID_ERROR,
        payload: err.response.msg,
      })
    );
};

export const addTestCovid = (newTestCovid, patient) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .post(`/api/covidTest/${patient._id}`, newTestCovid, config)
    .then((res) =>
      dispatch({
        type: ADD_TESTCOVID,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: TESTCOVID_ERROR,
        payload: err.response.data.msg,
      })
    );
};

export const editTestCovid = (updatedTest) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axios
    .put(`/api/covidTest/${updatedTest._id}`, updatedTest, config)
    .then((res) =>
      dispatch({
        type: UPDATE_TESTCOVID,
        payload: updatedTest,
      })
    )
    .catch((err) =>
      dispatch({
        type: TESTCOVID_ERROR,
        payload: err.response.msg,
      })
    );
};
export const saveTest = (testCovid) => (dispatch) => {
  dispatch({
    type: SAVE_TESTCOVID,
    payload: testCovid,
  });
};
export const clearTest = () => (dispatch) => {
  dispatch({
    type: CLEAR_TESTCOVID,
  });
};
