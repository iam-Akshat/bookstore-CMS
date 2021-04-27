import { combineReducers, createStore } from 'redux';
import booksReducer from './book';
import filterReducer from './filter';

const store = createStore(combineReducers({
  books: booksReducer,
  filter: filterReducer,
}));

export default store;
