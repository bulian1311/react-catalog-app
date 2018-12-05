import { FETCH_PRODUCTS_STORE } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_STORE:
      return { ...state, store: action.payload };
    default:
      return state;
  }
}
