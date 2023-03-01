/* Action Type */
import {
	createPromiseThunk,
	handleAsyncActions,
	reducerUtils,
} from '../utils/asyncUtil';
import { getGenresAPI } from '../api/genres';

const GET_GENRES = 'genres/GET_GENRES';
const GET_GENRES_SUCCESS = 'genres/GET_GENRES_SUCCESS';
const GET_GENRES_ERROR = 'genres/GET_GENRES_ERROR';

const SELECT_GENRE = 'genres/SELECT_GENRE';
const DESELECT_GENRE = 'genres/DESELECT_GENRE';
const RESET_SELECTED_GENRES = 'genres/RESET_SELECTED_GENRES';

/* Promise Thunk */
export const getGenres = createPromiseThunk(GET_GENRES, getGenresAPI);

/* 액션 생성 함수 */
export const selectGenre = id => ({ type: SELECT_GENRE, id });
export const deselectGenre = id => ({ type: DESELECT_GENRE, id });
export const resetSelectedGenres = () => ({ type: RESET_SELECTED_GENRES });

const initialState = {
	genres: reducerUtils.init([]),
};

/* Reducer */
export default function genres(state = initialState, action) {
	switch (action.type) {
		case GET_GENRES:
		case GET_GENRES_SUCCESS:
		case GET_GENRES_ERROR:
			return handleAsyncActions(
				GET_GENRES,
				'genres',
				true,
			)(state, action);
		case SELECT_GENRE:
			return {
				...state,
				genres: {
					...state.genres,
					data: state.genres.data.map(genre =>
						genre.id === action.id
							? { ...genre, isSelected: true }
							: genre,
					),
				},
			};
		case DESELECT_GENRE:
			return {
				...state,
				genres: {
					...state.genres,
					data: state.genres.data.map(genre =>
						genre.id === action.id
							? { ...genre, isSelected: false }
							: genre,
					),
				},
			};
		case RESET_SELECTED_GENRES:
			return {
				...state,
				genres: {
					...state.genres,
					data: state.genres.data.map(genre => ({
						...genre,
						isSelected: false,
					})),
				},
			};
		default:
			return state;
	}
}
