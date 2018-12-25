import {
  FETCH_CART,
  ADD_TO_CART,
  DELETE_FROM_CART,
  CART_CLEAR,
  CART_SUBMIT
} from '../actions/types';

const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CART:
      return action.payload;

    case ADD_TO_CART:
      return action.payload;

    case DELETE_FROM_CART:
      return action.payload;

    case CART_CLEAR:
      return {
        items: [],
        totalPrice: 0,
        totalCount: 0
      };

    case CART_SUBMIT:
      return {
        items: [],
        totalPrice: 0,
        totalCount: 0
      };

    default:
      return state;
  }
}
