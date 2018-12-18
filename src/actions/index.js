import axios from 'axios';
import {
  FETCH_PRODUCTS_STORE,
  FETCH_PRODUCTS_SHOW,
  FETCH_TAGS,
  FETCH_PRODUCERS,
  LOAD_MORE,
  SEARCH_HANDLER,
  SEARCH_QUERY,
  SEARCH_BY_TITLE,
  SEARCH_BY_DESCRIPTION,
  FETCH_CATEGORIES,
  FILTER_ADD,
  FILTER_DELETE,
  REPLACE_SHOW,
  FILTER
} from './types';

const api = axios.create({ baseURL: 'http://magmer-api.herokuapp.com/' });

export const fetchProductStore = () => async dispatch => {
  const res = await api.get('/product/list');

  dispatch({ type: FETCH_PRODUCTS_STORE, payload: res.data });
};

export const fetchProductShow = () => async dispatch => {
  const res = await api.get('/product/list/15');

  dispatch({ type: FETCH_PRODUCTS_SHOW, payload: res.data });
};

export const fetchCategories = () => async dispatch => {
  const res = await api.get('/category/list');

  dispatch({ type: FETCH_CATEGORIES, payload: res.data });
};

export const fetchTags = () => async dispatch => {
  const res = await api.get('/tag/list');

  dispatch({ type: FETCH_TAGS, payload: res.data });
};

export const fetchProducers = () => async dispatch => {
  const res = await api.get('/producer/list');

  dispatch({ type: FETCH_PRODUCERS, payload: res.data });
};

export const replaceShow = data => dispatch => {
  dispatch({ type: REPLACE_SHOW, payload: data });
};

export const loadMore = () => dispatch => {
  dispatch({ type: LOAD_MORE, payload: 15 });
};

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

export const filterAdd = val => dispatch => {
  dispatch({ type: FILTER_ADD, payload: val });
};

export const filterDelete = (val, filter) => dispatch => {
  filter.splice(filter.indexOf(val), 1);

  dispatch({ type: FILTER_DELETE, payload: filter });
};

export const filterBy = (filter, store) => dispatch => {
  const show = store.filter(product => {
    return (
      product.category === filter.find(el => el === product.category)
      // || product.producer === filter.find(el => el === product.producer)
    );
  });

  dispatch({ type: FILTER, payload: show });
};
