import axios from 'axios';
import {
  FETCH_PRODUCTS_STORE,
  FETCH_PRODUCTS_SHOW,
  FETCH_TAGS,
  FETCH_PRODUCERS,
  STORE_TO_SHOW
} from './types';

const api = axios.create({ baseURL: 'http://magmer-api.herokuapp.com/' });

export const fetchProductStore = () => async dispatch => {
  const res = await api.get('/product/list');

  dispatch({ type: FETCH_PRODUCTS_STORE, payload: res.data });
};

export const fetchProductShow = () => async dispatch => {
  const res = await api.get('/product/list/12');

  dispatch({ type: FETCH_PRODUCTS_SHOW, payload: res.data });
};

export const fetchTags = () => async dispatch => {
  const res = await api.get('/tag/list');

  dispatch({ type: FETCH_TAGS, payload: res.data });
};

export const fetchProducers = () => async dispatch => {
  const res = await api.get('/producer/list');

  dispatch({ type: FETCH_PRODUCERS, payload: res.data });
};

export const storeToShow = store => dispatch => {
  dispatch({ type: STORE_TO_SHOW, payload: store });
};
