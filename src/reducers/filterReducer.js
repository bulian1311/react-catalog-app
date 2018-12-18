import { FILTER_ADD, FILTER_DELETE } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FILTER_ADD:
      return [...state, action.payload];

    case FILTER_DELETE:
      return [...action.payload];

    default:
      return state;
  }
}
