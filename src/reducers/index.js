/**
 * [ Reducer definition ] : a function that returns a piece of the application state
 * An application has many different states. Therefore, An application has different "reducers"
 * 
 * For instance, all book lists and selected books : there are two kind of book list data.
 *
 * So the reducer created in "reducer_books.js" is wiring up to the application below. 
 * 
 * [combineReducers]: it is to map state!!!
 */
import { combineReducers } from 'redux';

import BookReducer from './reducer_books'

// It is step 2.
const rootReducer = combineReducers({
  
  // mapping "books" which is a key of the reducer of step 1 to value
  // In other word, "books" is mapping into "title" 
  // and "BooksReducer" is mapping into values like "Javascript" of objects in "reducer_books.js"
  
  // "books" : a key of "state"
  // "BookReducer": value 
  books: BooksReducer
});

export default rootReducer;
