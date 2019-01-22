import {
  FILTER_ADD,
  FILTER_DELETE,
  FILTER_BY_CATEGORY,
  FILTER_CLEAR
} from './types';

export const filterAdd = val => dispatch => {
  dispatch({ type: FILTER_ADD, payload: val });
};

export const filterDelete = (val, filter) => dispatch => {
  filter.splice(filter.indexOf(val), 1);

  dispatch({ type: FILTER_DELETE, payload: filter });
};

export const filterByCategory = (filter, store) => dispatch => {
  if (filter.length > 0) {
    const show = store.filter(product => {
      return (
        filter.includes(product.category) || filter.includes(product.producer)
      );
    });

    dispatch({ type: FILTER_BY_CATEGORY, payload: show });
  } else {
    dispatch({ type: FILTER_BY_CATEGORY, payload: store });
  }
};

export const filterClear = () => dispatch => {
  dispatch({ type: FILTER_CLEAR, payload: [] });
};
