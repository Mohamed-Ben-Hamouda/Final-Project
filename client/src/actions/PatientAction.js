import {
    GET_PATIENT,
    ADD_PATIENT,
    UPDATE_PATIENT,
    SAVE_PATIENT,
    CLEAR_PATIENT,
    PATIENT_ERROR,
    REMOVE_CURRENT_PATIENT,
} from "./types";
import axios from "axios";
// Get patient
export const getPatient = () => (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    axios
        .get("/api/patient", config)
        .then((res) =>
            dispatch({
                type: GET_PATIENT,
                payload: res.data,
            })
        )
        .catch((err) =>
            dispatch({
                type: PATIENT_ERROR,
                payload: err.response.msg,
            })
        );
};
// Add patient
export const addPatient = (newPatient) => (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    axios
        .post("/api/patient", newPatient, config)
        .then((res) =>
            dispatch({
                type: ADD_PATIENT,
                payload: res.data,
            })
        )
        .catch((err) =>
            dispatch({
                type: PATIENT_ERROR,
                payload: err.response.data.msg,
            })
        );
};
export const editPatient = (updatedPatient) => (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    axios
        .put(`/api/patient/${updatedPatient._id}`, updatedPatient, config)
        .then((res) =>
            dispatch({
                type: UPDATE_PATIENT,
                payload: updatedPatient,
            })
        )
        .catch((err) =>
            dispatch({
                type: PATIENT_ERROR,
                payload: err.response.msg,
            })
        );
};
export const savePatient = (patient) => (dispatch) => {
    dispatch({
        type: SAVE_PATIENT,
        payload: patient,
    });
};
export const clearPatient = () => (dispatch) => {
    dispatch({
        type: CLEAR_PATIENT,
    });
};
export const removeCurrentPatient = () => (dispatch) => {
    dispatch({
        type: REMOVE_CURRENT_PATIENT,
    });
};
