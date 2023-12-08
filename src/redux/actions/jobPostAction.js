import axios from 'axios';
import {
  CREATE_JOB_POST_REQUEST,
  CREATE_JOB_POST_SUCCESS,
  CREATE_JOB_POST_FAIL,
  UPDATE_JOB_POST_REQUEST,
  UPDATE_JOB_POST_SUCCESS,
  UPDATE_JOB_POST_FAIL,
  DELETE_JOB_POST_REQUEST,
  DELETE_JOB_POST_SUCCESS,
  DELETE_JOB_POST_FAIL,
  CLEAR_ERRORS,
  ALL_JOB_POST_REQUEST,
  ALL_JOB_POST_SUCCESS,
  ALL_JOB_POST_FAIL,
  SINGLE_JOB_POST_REQUEST,
  SINGLE_JOB_POST_SUCCESS,
  SINGLE_JOB_POST_FAIL,
} from '../constants/jobPostConstant';
import { baseUrl } from '../../utils/baseUrl';



export const createJobPost = (jobPostData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_JOB_POST_REQUEST });
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    const { data } = await axios.post(`${baseUrl}/post`,jobPostData,config);

    dispatch({ type: CREATE_JOB_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_JOB_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const getAllJobPosts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_JOB_POST_REQUEST });

    const { data } = await axios.get(`${baseUrl}/post`);

    dispatch({ type: ALL_JOB_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ALL_JOB_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getSingleJobPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_JOB_POST_REQUEST });

    const { data } = await axios.get(`${baseUrl}/post/${id}`);

    dispatch({ type: SINGLE_JOB_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SINGLE_JOB_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const updateJobPost = (id, jobPostData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_JOB_POST_REQUEST });
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: jobPostData
    }

    const { data } = await axios.put(`${baseUrl}/post/${id}`, config);

    dispatch({ type: UPDATE_JOB_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_JOB_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const deleteJobPost = (id, userId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_JOB_POST_REQUEST });

    const data = { userId }; 

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      data, 
    };

    await axios.delete(`${baseUrl}/post/${id}`, config);

    dispatch({ type: DELETE_JOB_POST_SUCCESS });
  } catch (error) {
    dispatch({
      type: DELETE_JOB_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};



export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
