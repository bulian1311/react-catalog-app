import { FETCH_TAGS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TAGS:
      return action.payload;
    default:
      return state;
  }
}
