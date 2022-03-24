import Movie from '../components/Movie';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMovieDetailById } from '../modules/movie';

function MovieContainer() {
	const { id } = useParams();
	const { loading, data, error } = useSelector(state => state.movie.movie);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getMovieDetailById(id));
	}, [id, dispatch]);

	if (loading) return <div>Loading ...</div>;
	if (error) return <div>Error !!!</div>;
	if (!data) return null;

	return <Movie movie={data} />;
}

export default MovieContainer;
