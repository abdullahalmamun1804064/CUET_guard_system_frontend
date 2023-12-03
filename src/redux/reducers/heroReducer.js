import {
  CREATE_HERO_REQUEST,
  CREATE_HERO_SUCCESS,
  CREATE_HERO_FAIL,
  DELETE_HERO_REQUEST,
  DELETE_HERO_SUCCESS,
  DELETE_HERO_FAIL,
  UPDATE_HERO_REQUEST,
  UPDATE_HERO_SUCCESS,
  UPDATE_HERO_FAIL,
  GET_HERO_REQUEST,
  GET_HERO_SUCCESS,
  GET_HERO_FAIL,
  CLEAR_ERRORS,
} from '../constants/';

const initialState = {
  hero: null,
  loading: false,
  error: null,
};

const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_HERO_REQUEST:
    case DELETE_HERO_REQUEST:
    case UPDATE_HERO_REQUEST:
    case GET_HERO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_HERO_SUCCESS:
      return {
        ...state,
        loading: false,
        hero: action.payload,
      };
    case DELETE_HERO_SUCCESS:
      return {
        ...state,
        loading: false,
        hero: null,
      };
    case UPDATE_HERO_SUCCESS:
      return {
        ...state,
        loading: false,
        hero: action.payload,
      };
    case GET_HERO_SUCCESS:
      return {
        ...state,
        loading: false,
        hero: action.payload,
      };
    case CREATE_HERO_FAIL:
    case DELETE_HERO_FAIL:
    case UPDATE_HERO_FAIL:
    case GET_HERO_FAIL:
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

export default heroReducer;
