import axios from 'axios'
import {
    ALL_JOBFIELD_REQUEST,
    ALL_JOBFIELD_SUCCESS,
    ALL_JOBFIELD_FAIL,
    CLEAR_ERRORS
} from '../constants/jobFieldConstant'
import { baseUrl } from '../../utils/baseUrl'


export const getJobFields = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_JOBFIELD_REQUEST })

        const { data } = await axios.get(`${baseUrl}/jobfields`)

        dispatch({
            type: ALL_JOBFIELD_SUCCESS,
            payload: data.data
        })

    } catch (error) {
        dispatch({
            type: ALL_JOBFIELD_FAIL,
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