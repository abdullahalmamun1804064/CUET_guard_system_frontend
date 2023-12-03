import axios from 'axios';
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
  CLEAR_ERRORS
}from '../constants/heroConstants';
import { baseUrl } from '../../utils/baseUrl';



export const createHero = (heroData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_HERO_REQUEST });
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    const data = await axios.post(`${baseUrl}/heroes`, heroData, config);
    dispatch({ type: CREATE_HERO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_HERO_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
export const getHero = (heroId) => async (dispatch) => {
  try {
    dispatch({ type: GET_HERO_REQUEST });
    const { data } = await axios.get(`${baseUrl}/heroes/${heroId}`);
    dispatch({ type: GET_HERO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_HERO_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const deleteHero = (heroId) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_HERO_REQUEST });
    await axios.delete(`${baseUrl}/heroes/${heroId}`);
    dispatch({ type: DELETE_HERO_SUCCESS });
  } catch (error) {
    dispatch({
      type: DELETE_HERO_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};

export const updateHero = (heroId, updatedHeroData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_HERO_REQUEST });
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    const { data } = await axios.put(`${baseUrl}/heroes/${heroId}`, updatedHeroData, config);
    dispatch({ type: UPDATE_HERO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_HERO_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};


// Clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
