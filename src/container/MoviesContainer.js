import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovies } from '../modules/movies';
import Movies from '../components/Movies';

function MoviesContainer() {
	const { loading, data, error } = useSelector(state => state.movies.movies);
	const dispatch = useDispatch();

	/* (1): getMovies() 함수 실행
	 * (5): 반환 된 thunk 함수를 dispatch
	 * (6): dispatch된 thunk 함수를 redux-middleware에서 store의 dispatch와 getState를 파라미터로 넣어 실행
	 * */
	useEffect(() => {
		dispatch(getMovies(2));
	}, [dispatch]);

	if (loading) return <div>Loading ...</div>;
	if (error) return <div>Error !!!</div>;
	if (!data) return null;

	return <Movies movies={data} />;
}

export default MoviesContainer;
