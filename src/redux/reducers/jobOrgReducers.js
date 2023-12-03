import {
    ALL_JOBORG_REQUEST,
    ALL_JOBORG_SUCCESS,
    ALL_JOBORG_FAIL,
    CLEAR_ERRORS
} from '../constants/jobOrgConstant'

export const jobOrgReducer = (state = { jobOrgs: [] }, action) => {
    switch (action.type) {

        case ALL_JOBORG_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case ALL_JOBORG_SUCCESS:
            return {
                ...state,
                loading: false,
                jobOrgs: action.payload
            }

        case ALL_JOBORG_FAIL:
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