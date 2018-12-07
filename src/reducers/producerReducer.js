import { FETCH_PRODUCERS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PRODUCERS:
      return action.payload;
    default:
      return state;
  }
}
