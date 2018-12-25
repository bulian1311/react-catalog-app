import { SORT_ADD, SORT_BY, SORT_CLEAR } from './types';

export const sortBy = (sort, data) => dispatch => {
  let show = data.slice();
  if (sort === 'price') {
    show.sort((a, b) => {
      return parseInt(a.price) - parseInt(b.price);
    });
  } else if (sort === 'name') {
    show.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
  } else {
    show.sort();
  }

  dispatch({ type: SORT_BY, payload: show });
};

export const sortAdd = val => dispatch => {
  dispatch({ type: SORT_ADD, payload: val });
};

export const sortClear = () => dispatch => {
  dispatch({ type: SORT_CLEAR, payload: 'none' });
};
