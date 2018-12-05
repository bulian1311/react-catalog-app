import axios from 'axios';
import { FETCH_PRODUCTS_STORE } from './types';

export const fetchProducts = () => async dispatch => {
  const res = await axios.get('http://magmer-api.herokuapp.com/product/list');

  dispatch({ type: FETCH_PRODUCTS_STORE, payload: res.data });
};
