import {
  ALL_COMMITTEE_REQUEST,
  ALL_COMMITTEE_SUCCESS,
  ALL_COMMITTEE_FAIL,
  CLEAR_ERRORS,
} from '../constants/committee';

const initialState = {
  committee: [],
  loading: false,
  error: null,
};

export const committeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_COMMITTEE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null, 
      };

    case ALL_COMMITTEE_SUCCESS:
      return {
        ...state,
        loading: false,
        committee: action.payload,
      };

    case ALL_COMMITTEE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
