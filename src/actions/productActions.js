import { magmerApi } from './axios';
import {
  FETCH_PRODUCTS_STORE,
  FETCH_PRODUCTS_SHOW,
  REPLACE_SHOW
} from './types';

export const fetchProductStore = () => async dispatch => {
  const res = await magmerApi.get('/product/list');

  dispatch({ type: FETCH_PRODUCTS_STORE, payload: res.data });
};

export const fetchProductShow = () => async dispatch => {
  const res = await magmerApi.get('/product/list/15');

  dispatch({ type: FETCH_PRODUCTS_SHOW, payload: res.data });
};

export const replaceShow = data => dispatch => {
  dispatch({ type: REPLACE_SHOW, payload: data });
};
