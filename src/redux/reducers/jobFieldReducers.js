import {
    ALL_JOBFIELD_REQUEST,
    ALL_JOBFIELD_SUCCESS,
    ALL_JOBFIELD_FAIL,
    CLEAR_ERRORS
} from '../constants/jobFieldConstant'

export const jobFieldReducer = (state = { jobFields: [] }, action) => {
    switch (action.type) {

        case ALL_JOBFIELD_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case ALL_JOBFIELD_SUCCESS:
            return {
                ...state,
                loading: false,
                jobFields: action.payload
            }

        case ALL_JOBFIELD_FAIL:
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