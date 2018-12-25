import { LOAD_MORE, LOA_MORE_CLEAR } from './types';

export const loadMore = () => dispatch => {
  dispatch({ type: LOAD_MORE, payload: 15 });
};

export const loadMoreClear = () => dispatch => {
  dispatch({ type: LOA_MORE_CLEAR, payload: 15 });
};
