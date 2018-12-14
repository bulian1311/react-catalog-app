import {
  FETCH_PRODUCTS_STORE,
  FETCH_PRODUCTS_SHOW,
  SEARCH_BY_TITLE,
  SEARCH_BY_DESCRIPTION
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_STORE:
      return { ...state, store: action.payload, show: action.payload };

    case FETCH_PRODUCTS_SHOW:
      return { ...state, show: action.payload };

    case SEARCH_BY_TITLE:
      return { ...state, show: action.payload };

    case SEARCH_BY_DESCRIPTION:
      return { ...state, show: action.payload };

    default:
      return state;
  }
}
