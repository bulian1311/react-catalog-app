import { SEARCH_HANDLER, SEARCH_QUERY, SEARCH_CLEAR } from '../actions/types';

const initialState = { handler: 'title', query: '' };

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_HANDLER:
      return { ...state, handler: action.payload };

    case SEARCH_QUERY:
      return { ...state, query: action.payload };

    case SEARCH_CLEAR:
      return initialState;

    default:
      return state;
  }
}
