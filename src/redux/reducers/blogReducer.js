import {
  ALL_BLOG_REQUEST,
  ALL_BLOG_SUCCESS,
  ALL_BLOG_FAIL,
  SINGLE_BLOG_REQUEST,
  SINGLE_BLOG_SUCCESS,
  SINGLE_BLOG_FAIL,
  CLEAR_ERRORS,
} from '../constants/blogConstant';

export const blogReducer = (state = { blogs: [], singleBlog: null }, action) => {
  switch (action.type) {
    case ALL_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ALL_BLOG_SUCCESS:

      return {
        ...state,
        loading: false,
        blogs: action.payload,
        singleBlog: null,
      };

    case ALL_BLOG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SINGLE_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
        singleBlog: null, 
      };

    case SINGLE_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        singleBlog: action.payload,
      };

    case SINGLE_BLOG_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
