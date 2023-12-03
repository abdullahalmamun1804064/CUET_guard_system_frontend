import axios from 'axios'
import {
    ALL_JOBORG_REQUEST,
    ALL_JOBORG_SUCCESS,
    ALL_JOBORG_FAIL,
    CLEAR_ERRORS
} from '../constants/jobOrgConstant'
import { baseUrl } from '../../utils/baseUrl'


export const getJobOrgs = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_JOBORG_REQUEST })

        const { data } = await axios.get(`${baseUrl}/joborgs`)

        dispatch({
            type: ALL_JOBORG_SUCCESS,
            payload: data.data
        })

    } catch (error) {
        dispatch({
            type: ALL_JOBORG_FAIL,
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