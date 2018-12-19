import { SORT_ADD, SORT_CLEAR } from '../actions/types';

export default function(state = 'none', action) {
  switch (action.type) {
    case SORT_ADD:
      return action.payload;
    case SORT_CLEAR:
      return action.payload;
    default:
      return state;
  }
}
