import {
  FETCH_PRODUCTS_STORE,
  FETCH_PRODUCTS_SHOW,
  REPLACE_SHOW,
  SEARCH_BY_TITLE,
  SEARCH_BY_DESCRIPTION,
  FILTER
} from '../actions/types';

const initialState = { store: [], show: [], filtered: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_STORE:
      return { ...state, store: action.payload };

    case FETCH_PRODUCTS_SHOW:
      return { ...state, show: action.payload };

    case REPLACE_SHOW:
      return { ...state, show: action.payload };

    case SEARCH_BY_TITLE:
      return { ...state, show: action.payload };

    case SEARCH_BY_DESCRIPTION:
      return { ...state, show: action.payload };

    case FILTER:
      return { ...state, filtered: action.payload };
    default:
      return state;
  }
}
