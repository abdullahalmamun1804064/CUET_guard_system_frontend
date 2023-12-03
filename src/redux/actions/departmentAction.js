import axios from "axios";

import {
    ALL_DEPARTMENT_REQUEST,
    ALL_DEPARTMENT_SUCCESS,
    ALL_DEPARTMENT_FAIL,
    CLEAR_ERRORS
} from "../constants/departmentConstant";
import { baseUrl } from "../../utils/baseUrl";


export const getDepartments = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_DEPARTMENT_REQUEST })

        const { data } = await axios.get(`${baseUrl}/departments`)

        dispatch({
            type: ALL_DEPARTMENT_SUCCESS,
            payload: data.data
        })

    } catch (error) {
        dispatch({
            type: ALL_DEPARTMENT_FAIL,
            payload: error.response.data.errMessage
        })

    }
}

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}