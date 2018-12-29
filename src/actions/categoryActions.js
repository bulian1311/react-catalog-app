import { magmerApi } from './axios';
import { FETCH_CATEGORIES } from './types';

export const fetchCategories = () => async dispatch => {
  const res = await magmerApi.get('/category/list');

  dispatch({ type: FETCH_CATEGORIES, payload: res.data });
};
