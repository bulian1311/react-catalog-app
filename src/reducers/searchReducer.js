import { SEARCH_HANDLER } from '../actions/types';

export default function(state = { handler: 'title' }, action) {
  switch (action.type) {
    case SEARCH_HANDLER:
      return { ...state, handler: action.payload };
    default:
      return state;
  }
}
