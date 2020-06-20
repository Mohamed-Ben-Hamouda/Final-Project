import {
    ADD_INFERMIER, DELETE_INFERMIER, INFERMIER_INFOS, UPDATE_INFERMIER, SAVE_INFERMIER, CLEAR_INFERMIER, INFERMIER_ERROR, REMOVE_CURRENT_INFERMIER,
    GET_INFERMIER, GET_PATIENT_INF, PATIENT_ERROR, GET_ALL_MEDECIN
} from './types'
import axios from 'axios'

// Get infermier
export const getInfermier = (id) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.get(`/api/medecin/infermier/${id}`, config)
        .then(res => dispatch({
            type: GET_INFERMIER,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: INFERMIER_ERROR,
            payload: err.response.data.msg
        })
        )
}
export const getAllMed = () => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.get(`/api/medecin/medecin`, config)
        .then(res => dispatch({
            type: GET_ALL_MEDECIN,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: INFERMIER_ERROR,
            payload: err.response.data.msg
        })
        )
}

export const infirmierInfos = (infermier) => dispatch => {
    dispatch({
        type: INFERMIER_INFOS,
        payload: infermier
    })

}
//get patient d'un infermier
export const getPatientinf = (id) => (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    axios.get(`/api/patient/inf/${id}`, config).then((res) =>
        dispatch({
            type: GET_PATIENT_INF,
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



// Add infermier
export const addInfermier = newInfermier => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.post('/api/infermier', newInfermier, config)
        .then(res => dispatch({
            type: ADD_INFERMIER,
            payload: res.data
        }))
    // .catch(err => dispatch({
    //     type: INFERMIER_ERROR,
    //     payload: err.response.data.msg
    // }))

}
// Remove Current infermier
export const removeCurrentInfermier = () => dispatch => {
    dispatch({
        type: REMOVE_CURRENT_INFERMIER
    })
}
//del infermier
export const deleteInfermier = (id) => dispatch => {
    axios.delete(`/api/medecin/${id}`)
        .then(() => dispatch({
            type: DELETE_INFERMIER,
            payload: id
        }))
        .catch(err => dispatch({
            type: INFERMIER_ERROR,
            payload: err.response.data.msg
        }))

}

export const saveInfermier = infermier => dispatch => {
    dispatch({
        type: SAVE_INFERMIER,
        payload: infermier
    })
}
//update infermier
export const editInfermier = (id, updatedInfermier) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.put(`/api/medecin/medecin/${id}`, updatedInfermier, config)
        .then(res => dispatch({
            type: UPDATE_INFERMIER,
            payload: { ...updatedInfermier, id }
        }))
        .catch(err => dispatch({
            type: INFERMIER_ERROR,
            payload: err.response.data.msg
        }))

}

export const clearInfermier = () => dispatch => {
    dispatch({
        type: CLEAR_INFERMIER
    })
}