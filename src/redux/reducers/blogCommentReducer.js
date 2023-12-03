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

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

export const blogCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_BLOG_COMMENT_REQUEST:
    case ALL_BLOG_COMMENT_REQUEST:
    case UPDATE_BLOG_COMMENT_REQUEST:
    case DELETE_BLOG_COMMENT_REQUEST:
      return { ...state, loading: true, error: null };

    case POST_BLOG_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        comments: [...state.comments, action.payload], 
      };

    case ALL_BLOG_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        comments: action.payload, // Replace existing comments with the fetched comments
      };

    case UPDATE_BLOG_COMMENT_SUCCESS:
      // Find the updated comment in the state and replace it
      const updatedComments = state.comments.map((comment) =>
        comment._id === action.payload._id ? action.payload : comment
      );

      return {
        ...state,
        loading: false,
        error: null,
        comments: updatedComments,
      };

    case DELETE_BLOG_COMMENT_SUCCESS:
      // Filter out the deleted comment from the state
      const filteredComments = state.comments.filter(
        (comment) => comment._id !== action.payload
      );

      return {
        ...state,
        loading: false,
        error: null,
        comments: filteredComments,
      };

    case POST_BLOG_COMMENT_FAIL:
    case ALL_BLOG_COMMENT_FAIL:
    case UPDATE_BLOG_COMMENT_FAIL:
    case DELETE_BLOG_COMMENT_FAIL:
      return { ...state, loading: false, error: action.payload };

    case CLEAR_ERRORS:
      return { ...state, error: null };

    default:
      return state;
  }
};


