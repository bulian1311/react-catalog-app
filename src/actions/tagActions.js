import { magmerApi } from './axios';
import { FETCH_TAGS } from './types';

export const fetchTags = () => async dispatch => {
  const res = await magmerApi.get('/tag/list');

  dispatch({ type: FETCH_TAGS, payload: res.data });
};
