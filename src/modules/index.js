import { combineReducers } from 'redux';
import movies from './movies';
import movie from './movie';
import genres from './genres';

const rootReducer = combineReducers({ movies, movie, genres });

export default rootReducer;
