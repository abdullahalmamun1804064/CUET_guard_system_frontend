import axios from 'axios'
import {
    ALL_BATCH_REQUEST,
    ALL_BATCH_SUCCESS,
    ALL_BATCH_FAIL,
    CLEAR_ERRORS
} from '../constants/batchConstant'
import { baseUrl } from '../../utils/baseUrl'


export const getBatches = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_BATCH_REQUEST })

        const { data } = await axios.get(`${baseUrl}/batches`)

        dispatch({
            type: ALL_BATCH_SUCCESS,
            payload: data.data
        })

    } catch (error) {
        dispatch({
            type: ALL_BATCH_FAIL,
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