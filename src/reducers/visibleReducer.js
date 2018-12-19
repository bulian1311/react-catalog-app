import { LOAD_MORE, LOA_MORE_CLEAR } from '../actions/types';

export default function(visible = 15, action) {
  switch (action.type) {
    case LOAD_MORE:
      return visible + action.payload;
    case LOA_MORE_CLEAR:
      return action.payload;
    default:
      return visible;
  }
}
