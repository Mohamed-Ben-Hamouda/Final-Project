import {
    ADD_SOIN,
    GET_SOIN,
    SOIN_ERROR,
    GET_SOIN_ONE,
    UPDATE_SOIN,
    SAVE_SOIN,
    CLEAR_SOIN,
} from "./types";
import { loadInfermier } from "./AuthAction";
import axios from "axios";

export const getSoin = (id) => (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    axios
        .get(`/api/soin/${id}`, config)
        .then((res) =>
            dispatch({
                type: GET_SOIN,
                payload: res.data,
            })
        )
        .catch((err) =>
            dispatch({
                type: SOIN_ERROR,
                payload: err.response.msg,
            })
        );
};
export const addSoin = (newSoin, id) => (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    axios
        .post(`/api/soin/${id}`, newSoin, config)
        .then((res) => dispatch({ type: ADD_SOIN, payload: res.data }))
        .catch((err) =>
            dispatch({
                type: SOIN_ERROR,
                payload: err.response.data.msg,
            })
        );
};
export const editSoin = (updatedSoin) => (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    axios
        .put(`/api/soin/${updatedSoin._id}`, updatedSoin, config)
        .then((res) =>
            dispatch({
                type: UPDATE_SOIN,
                payload: updatedSoin,
            })
        )
        .catch((err) =>
            dispatch({
                type: SOIN_ERROR,
                payload: err.response.msg,
            })
        );
};
export const saveSoin = (soin) => (dispatch) => {
    dispatch({
        type: SAVE_SOIN,
        payload: soin,
    });
};
export const clearSoin = () => (dispatch) => {
    dispatch({
        type: CLEAR_SOIN,
    });
};