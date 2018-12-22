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
  FILTER_BY_CATEGORY,
  SORT_ADD,
  SORT_BY,
  SORT_CLEAR,
  FILTER_CLEAR,
  SEARCH_CLEAR,
  LOA_MORE_CLEAR,
  FETCH_CART,
  ADD_TO_CART,
  DELETE_FROM_CART,
  CART_CLEAR
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

export const filterByCategory = (filter, store) => dispatch => {
  if (filter.length > 0) {
    const show = store.filter(product => {
      return filter.includes(product.category);
    });

    dispatch({ type: FILTER_BY_CATEGORY, payload: show });
  } else {
    dispatch({ type: FILTER_BY_CATEGORY, payload: store });
  }
};

export const sortAdd = val => dispatch => {
  dispatch({ type: SORT_ADD, payload: val });
};

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

export const sortClear = () => dispatch => {
  dispatch({ type: SORT_CLEAR, payload: 'none' });
};

export const filterClear = () => dispatch => {
  dispatch({ type: FILTER_CLEAR, payload: [] });
};

export const searchClear = () => dispatch => {
  dispatch({ type: SEARCH_CLEAR, payload: '' });
};

export const loadMoreClear = () => dispatch => {
  dispatch({ type: LOA_MORE_CLEAR, payload: 15 });
};

export const addToCart = (product, cart) => dispatch => {
  let newItems = [...cart.items];
  let isPush = true;

  newItems.forEach(item => {
    if (item.product._id === product._id) {
      ++item.count;
      isPush = false;
    }
  });

  if (isPush) {
    newItems.push({ product, count: 1 });
  }

  const newCart = {
    items: newItems,
    totalPrice: cart.totalPrice + parseInt(product.price),
    totalCount: ++cart.totalCount
  };

  localStorage.setItem('magmer-cart', JSON.stringify(newCart));

  dispatch({ type: ADD_TO_CART, payload: newCart });
};

export const deleteFromCart = (product, cart) => dispatch => {
  let newItems = [...cart.items];

  newItems.forEach(item => {
    if (item.product._id === product._id) {
      --item.count;
    }
  });

  newItems = newItems.filter(item => {
    return item.count > 0;
  });

  const newCart = {
    items: newItems,
    totalPrice: cart.totalPrice - parseInt(product.price),
    totalCount: --cart.totalCount
  };

  localStorage.setItem('magmer-cart', JSON.stringify(newCart));

  dispatch({ type: DELETE_FROM_CART, payload: newCart });
};

export const cartClear = () => dispatch => {
  localStorage.removeItem('magmer-cart');
  dispatch({ type: CART_CLEAR });
};

export const fetchCart = () => dispatch => {
  let cart = JSON.parse(localStorage.getItem('magmer-cart'));
  console.log(cart, '111');

  if (!cart) {
    cart = { totalCount: 0, totalPrice: 0, items: [] };
  }

  console.log(cart, '2222');
  dispatch({ type: FETCH_CART, payload: cart });
};
