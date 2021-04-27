import { combineReducers, createStore } from 'redux';
import booksReducer from './book';

const store = createStore(combineReducers({
  books: booksReducer,
}));

export default store;
