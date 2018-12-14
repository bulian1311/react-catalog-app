import { combineReducers } from 'redux';
import productReducer from './productReducer';
import tagReducer from './tagReducer';
import producerReducer from './producerReducer';
import visibleReducer from './visibleReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  products: productReducer,
  tags: tagReducer,
  producers: producerReducer,
  visible: visibleReducer,
  search: searchReducer
});
