import {
	createPromiseThunk,
	handleAsyncActions,
	reducerUtils,
} from '../utils/asyncUtil';
import { getMovieDetailByIdAPI } from '../api/movie';

/* Action Type */
const GET_MOVIE = 'movie/GET_MOVIES';
const GET_MOVIE_SUCCESS = 'movie/GET_MOVIES_SUCCESS';
const GET_MOVIE_ERROR = 'movie/GET_MOVIES_ERROR';

/* Thunk Function */
export const getMovieDetailById = createPromiseThunk(
	GET_MOVIE,
	getMovieDetailByIdAPI,
);

const initialState = {
	movie: reducerUtils.init(),
};

export default function movie(state = initialState, action) {
	switch (action.type) {
		case GET_MOVIE:
		case GET_MOVIE_SUCCESS:
		case GET_MOVIE_ERROR:
			return handleAsyncActions(GET_MOVIE, 'movie', false)(state, action);
		default:
			return state;
	}
}
