import {
    ALL_BATCH_REQUEST,
    ALL_BATCH_SUCCESS,
    ALL_BATCH_FAIL,
    CLEAR_ERRORS
} from '../constants/batchConstant'

export const batchReducer = (state = { batches: [] }, action) => {
    switch (action.type) {

        case ALL_BATCH_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case ALL_BATCH_SUCCESS:
            return {
                ...state,
                loading: false,
                batches: action.payload
            }

        case ALL_BATCH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }


        default:
            return state;
    }
}