import {
  SEARCH_HANDLER,
  SEARCH_QUERY,
  SEARCH_BY_TITLE,
  SEARCH_BY_DESCRIPTION,
  SEARCH_CLEAR
} from './types';

export const searchHandler = value => dispatch => {
  dispatch({ type: SEARCH_HANDLER, payload: value });
};

export const searchQuery = value => dispatch => {
  dispatch({ type: SEARCH_QUERY, payload: value });
};

export const searchByTitle = (query, products) => dispatch => {
  const show = products.filter(product => {
    const title = product.title.toLowerCase();
    return title.includes(query.toLowerCase());
  });

  dispatch({ type: SEARCH_BY_TITLE, payload: show });
};

export const searchByDescription = (query, products) => dispatch => {
  const show = products.filter(product => {
    const description = product.description.toLowerCase();
    return description.includes(query.toLowerCase());
  });

  dispatch({ type: SEARCH_BY_DESCRIPTION, payload: show });
};

export const searchClear = () => dispatch => {
  dispatch({ type: SEARCH_CLEAR, payload: '' });
};
