import { magmerApi } from './axios';
import { FETCH_PRODUCERS } from './types';

export const fetchProducers = () => async dispatch => {
  const res = await magmerApi.get('/producer/list');

  dispatch({ type: FETCH_PRODUCERS, payload: res.data });
};
