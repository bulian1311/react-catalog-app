import { LOAD_MORE } from '../actions/types';

export default function(visible = 16, action) {
  switch (action.type) {
    case LOAD_MORE:
      return visible + action.payload;
    default:
      return visible;
  }
}
