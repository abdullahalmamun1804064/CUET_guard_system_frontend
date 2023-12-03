import {
    ALL_DEPARTMENT_REQUEST,
    ALL_DEPARTMENT_SUCCESS,
    ALL_DEPARTMENT_FAIL,
    CLEAR_ERRORS
} from '../constants/departmentConstant'

export const departmentsReducer = (state = { departments: [] }, action) => {
    switch (action.type) {

        case ALL_DEPARTMENT_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case ALL_DEPARTMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                departments: action.payload
            }

        case ALL_DEPARTMENT_FAIL:
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