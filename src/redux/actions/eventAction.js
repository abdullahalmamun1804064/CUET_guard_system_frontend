import axios from 'axios';

import {
  ALL_EVENT_REQUEST,
  ALL_EVENT_SUCCESS,
  ALL_EVENT_FAIL,
  SINGLE_EVENT_REQUEST,
  SINGLE_EVENT_SUCCESS,
  SINGLE_EVENT_FAIL,
  CLEAR_ERRORS,
} from '../constants/eventCostant';
import { baseUrl } from '../../utils/baseUrl';

// Fetch all events
export const getAllEvents = () => async (dispatch) => {

  try {
    dispatch({ type: ALL_EVENT_REQUEST });

    const { data } = await axios.get(`http://127.0.0.1:8001/api/v1/blogs/events`);

    dispatch({
      type: ALL_EVENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_EVENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Fetch a single event by ID
export const getSingleEvent = (eventId) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_EVENT_REQUEST });

    const { data } = await axios.get(`${baseUrl}/events/${eventId}`);
    dispatch({
      type: SINGLE_EVENT_SUCCESS,
      payload: data.event,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_EVENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
