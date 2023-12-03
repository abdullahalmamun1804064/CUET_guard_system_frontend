import axios from 'axios'; // You may need to install and configure axios for making API requests.

import {
  POST_BLOG_COMMENT_REQUEST,
  POST_BLOG_COMMENT_SUCCESS,
  POST_BLOG_COMMENT_FAIL,
  ALL_BLOG_COMMENT_REQUEST,
  ALL_BLOG_COMMENT_SUCCESS,
  ALL_BLOG_COMMENT_FAIL,
  UPDATE_BLOG_COMMENT_REQUEST,
  UPDATE_BLOG_COMMENT_SUCCESS,
  UPDATE_BLOG_COMMENT_FAIL,
  DELETE_BLOG_COMMENT_REQUEST,
  DELETE_BLOG_COMMENT_SUCCESS,
  DELETE_BLOG_COMMENT_FAIL,
  CLEAR_ERRORS,
} from '../constants/blogComment';
import { baseUrl } from "../../utils/baseUrl";

export const postBlogComment = (commentData) => async (dispatch) => {
  try {
    dispatch({ type: POST_BLOG_COMMENT_REQUEST });
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    const response = await axios.post(`${baseUrl}/comment`, commentData, config);

    dispatch({
      type: POST_BLOG_COMMENT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: POST_BLOG_COMMENT_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};



export const getAllBlogComments = (blogId) => async (dispatch) => {
  try {
    dispatch({ type: ALL_BLOG_COMMENT_REQUEST });

    const response = await axios.get(`${baseUrl}/comment/${blogId}`);

    dispatch({
      type: ALL_BLOG_COMMENT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ALL_BLOG_COMMENT_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};


// Action to update a blog comment
export const updateBlogComment = (updatedData) => async (dispatch) => {

  console.log(updatedData,'cpmment action');
  try {
    dispatch({ type: UPDATE_BLOG_COMMENT_REQUEST });


    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    const response = await axios.put(`${baseUrl}/comment`, updatedData, config);
    dispatch({
      type: UPDATE_BLOG_COMMENT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_BLOG_COMMENT_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};


export const deleteBlogComment = (commentData) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BLOG_COMMENT_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json', 
      },
      data: commentData, 
    };

    await axios.delete(`${baseUrl}/comment`, config); 

    dispatch({ type: DELETE_BLOG_COMMENT_SUCCESS });
  } catch (error) {
    dispatch({
      type: DELETE_BLOG_COMMENT_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};



export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
