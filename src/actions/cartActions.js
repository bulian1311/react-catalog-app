import { magmerCart } from './axios';
import {
  FETCH_CART,
  ADD_TO_CART,
  DELETE_FROM_CART,
  CART_CLEAR,
  CART_SUBMIT
} from './types';

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

  if (!cart) {
    cart = { totalCount: 0, totalPrice: 0, items: [] };
  }

  dispatch({ type: FETCH_CART, payload: cart });
};

export const cartSubmit = (cart, user) => async dispatch => {
  let res = await magmerCart.post('/', {
    cart,
    user
  });
  if (res.data.msg === 'success') {
    localStorage.removeItem('magmer-cart');
    dispatch({ type: CART_SUBMIT, payload: res.data });
  }
};
