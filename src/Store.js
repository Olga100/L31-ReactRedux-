import {createStore}  from 'redux';
import {movieReducer} from './reducers';
import movies from './movies.json';

const store = createStore(movieReducer, movies.movies[0]);

export default store;