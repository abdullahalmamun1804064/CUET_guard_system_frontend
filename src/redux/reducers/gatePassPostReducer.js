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
} from "../constants/gatePassPostConstant";
const initialState = {
  jobPosts: [],
  singleJobPost: null,
  error: null,
  loading: false,
};

export const jobPostReducer = (state = initialState, action) => {
  switch (action.type) {

    case CREATE_JOB_POST_REQUEST:
    case UPDATE_JOB_POST_REQUEST:
    case DELETE_JOB_POST_REQUEST:
    case ALL_JOB_POST_REQUEST:
    case SINGLE_JOB_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_JOB_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        jobPosts: [...state.jobPosts, action.payload],
      };


    case UPDATE_JOB_POST_SUCCESS:
      const updatedJobPosts = state.jobPosts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

      return {
        ...state,
        loading: false,
        error: null,
        jobPosts: updatedJobPosts,
      };


    case DELETE_JOB_POST_SUCCESS:
      const filteredJobPosts = state.jobPosts.filter(
        (post) => post._id !== action.payload
      );
      return {
        ...state,
        loading: false,
        error: null,
        jobPosts: filteredJobPosts,
      };

    case ALL_JOB_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        jobPosts: action.payload,
      };

    case SINGLE_JOB_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        singleJobPost: action.payload,
      };


    case CREATE_JOB_POST_FAIL:
    case UPDATE_JOB_POST_FAIL:
    case DELETE_JOB_POST_FAIL:
    case ALL_JOB_POST_FAIL:
    case SINGLE_JOB_POST_FAIL:
      return { ...state, loading: false, error: action.payload };

    case CLEAR_ERRORS:
      return { ...state, error: null };

    default:
      return state;
  }
};
