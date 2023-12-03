import {
  ALL_EVENT_REQUEST,
  ALL_EVENT_SUCCESS,
  ALL_EVENT_FAIL,
  SINGLE_EVENT_REQUEST,
  SINGLE_EVENT_SUCCESS,
  SINGLE_EVENT_FAIL,
  CLEAR_ERRORS,
} from '../constants/eventCostant';

const initialState = {
  events: [],
  event: {},
  loading: false,
  error: null,
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_EVENT_REQUEST:
    case SINGLE_EVENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ALL_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        events: action.payload,
      };

    case SINGLE_EVENT_SUCCESS:
      return {
        ...state,
        loading: false,
        event: action.payload,
      };

    case ALL_EVENT_FAIL:
    case SINGLE_EVENT_FAIL:
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
