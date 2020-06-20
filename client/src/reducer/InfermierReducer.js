import { ADD_INFERMIER, INFERMIER_INFOS, DELETE_INFERMIER, UPDATE_INFERMIER, SAVE_INFERMIER, CLEAR_INFERMIER, INFERMIER_ERROR, REMOVE_CURRENT_INFERMIER, GET_INFERMIER, GET_ALL_MEDECIN } from '../actions/types'

const initialState = {
    infermier: null,
    saved: null,
    error: null,
    patient: null,
    medecins: null
}

const InfermierReducer = (state = initialState, action) => {
    switch (action.type) {
        // case INFERMIER_INFOS:
        //     return {
        //         ...state,
        //         infermier: action.payload
        //     }
        // case ADD_INFERMIER:
        //     return {
        //         ...state,
        //         infermier: [action.payload, ...state.infermier]
        //     }
        // case DELETE_INFERMIER:
        //     return {
        //         ...state,
        //         infermier: state.infermier.filter(el => el._id !== action.payload)
        //     }
        case SAVE_INFERMIER:
            return {
                ...state,
                saved: action.payload
            }
        case GET_ALL_MEDECIN:
            return {
                ...state,
                medecins: action.payload
            }

        // case CLEAR_INFERMIER:
        //     return {
        //         ...state,
        //         saved: null
        //     }
        case INFERMIER_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case REMOVE_CURRENT_INFERMIER:
            return {
                ...state,
                infermier: []
            }
        default:
            return state
    }
}

export default InfermierReducer