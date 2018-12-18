import { combineReducers } from 'redux';
import productReducer from './productReducer';
import tagReducer from './tagReducer';
import producerReducer from './producerReducer';
import visibleReducer from './visibleReducer';
import searchReducer from './searchReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
  products: productReducer,
  tags: tagReducer,
  categories: categoryReducer,
  producers: producerReducer,
  visible: visibleReducer,
  search: searchReducer
});
