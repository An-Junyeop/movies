import {
	createPromiseThunk,
	handleAsyncActions,
	reducerUtils,
} from '../utils/asyncUtil';
import { getNowPlayingMoviesAPI, getSearchMoviesAPI } from '../api/movies';

/* Action Type */
const GET_MOVIES = 'movies/GET_MOVIES';
const GET_MOVIES_SUCCESS = 'movies/GET_MOVIES_SUCCESS';
const GET_MOVIES_ERROR = 'movies/GET_MOVIES_ERROR';

const GET_SEARCH_MOVIES = 'movies/GET_SEARCH_MOVIES';
const GET_SEARCH_MOVIES_SUCCESS = 'movies/GET_SEARCH_MOVIES_SUCCESS';
const GET_SEARCH_MOVIES_ERROR = 'movies/GET_SEARCH_MOVIES_ERROR';

/* (2): createPromiseThunk 함수 실행
 * (4): 반환 된 thunk 함수를 반환
 * */
export const getMovies = createPromiseThunk(GET_MOVIES, getNowPlayingMoviesAPI);
export const getSearchMovies = createPromiseThunk(
	GET_SEARCH_MOVIES,
	getSearchMoviesAPI,
);

const initialState = {
	movies: reducerUtils.init(),
};

/* (8):dispatch되는 action을 받아 case에 맞게 실행 */
export default function movies(state = initialState, action) {
	switch (action.type) {
		case GET_MOVIES:
		case GET_MOVIES_SUCCESS:
		case GET_MOVIES_ERROR:
			return handleAsyncActions(
				GET_MOVIES,
				'movies',
				true,
			)(state, action);

		case GET_SEARCH_MOVIES:
		case GET_SEARCH_MOVIES_SUCCESS:
		case GET_SEARCH_MOVIES_ERROR:
			return handleAsyncActions(
				GET_SEARCH_MOVIES,
				'movies',
				true,
			)(state, action);
		default:
			return state;
	}
}
