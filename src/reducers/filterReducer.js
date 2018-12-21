import { FILTER_ADD, FILTER_DELETE, FILTER_CLEAR } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FILTER_ADD:
      return [...state, action.payload];

    case FILTER_DELETE:
      return [...action.payload];

    case FILTER_CLEAR:
      return [];

    default:
      return state;
  }
}
