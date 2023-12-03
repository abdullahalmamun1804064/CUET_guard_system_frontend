import axios from "axios";
import {
  ALL_BLOG_REQUEST,
  ALL_BLOG_SUCCESS,
  ALL_BLOG_FAIL,
  SINGLE_BLOG_REQUEST,
  SINGLE_BLOG_SUCCESS,
  SINGLE_BLOG_FAIL,
  CLEAR_ERRORS
} from "../constants/blogConstant";
import { baseUrl } from "../../utils/baseUrl";


export const getBlogs = (pageNumber) => async (dispatch) => {
  console.log(pageNumber,"---blog action");
  try {
    dispatch({ type: ALL_BLOG_REQUEST });

    const data = await axios.get(`http://127.0.0.1:8001/api/v1/blogs?page=${pageNumber}`, { withCredentials: true });
    console.log(data.data);
  
    dispatch({
      type: ALL_BLOG_SUCCESS,
      payload: data.data
    });

  } catch (error) {
    dispatch({
      type: ALL_BLOG_FAIL,
      payload: error.response.data.errMessage
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  });
};



export const getSingleBlog = (blogId) => async (dispatch) => {

  try {
    dispatch({ type: SINGLE_BLOG_REQUEST });
    const { data } = await axios.get(`http://127.0.0.1:8001/api/v1/blogs/${blogId}`, { withCredentials: true });
    dispatch({
      type: SINGLE_BLOG_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_BLOG_FAIL,
      payload: error.response.data.errMessage,
    });
  }
};
