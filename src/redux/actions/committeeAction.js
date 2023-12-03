import axios from 'axios'
import {
  ALL_COMMITTEE_REQUEST,
  ALL_COMMITTEE_SUCCESS,
  ALL_COMMITTEE_FAIL,
  CLEAR_ERRORS
} from '../constants/committee'
import { baseUrl } from '../../utils/baseUrl'


export const getcommittee = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_COMMITTEE_REQUEST })

    const { data } = await axios.get(`${baseUrl}/committee`)
  
    dispatch({
      type: ALL_COMMITTEE_SUCCESS,
      payload: data.committees
    })

  } catch (error) {
    dispatch({
      type: ALL_COMMITTEE_FAIL,
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