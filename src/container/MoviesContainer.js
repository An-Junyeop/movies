import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getMovies, getSearchMovies } from '../modules/movies';
import Movies from '../components/Movies';

function MoviesContainer({ page }) {
	const { loading, data, error } = useSelector(state => state.movies.movies);
	const genres = useSelector(state => state.genres.genres.data);
	const dispatch = useDispatch();

	useEffect(() => {
		const selectedGenres = genres.filter(genre => genre.isSelected);
		if (selectedGenres.length) {
			dispatch(
				getSearchMovies({
					genres: selectedGenres.map(genre => genre.id).join(','),
					page,
				}),
			);
		} else {
			dispatch(getMovies(page));
		}
	}, [dispatch, genres, page]);

	if (loading) return <div>Loading ...</div>;
	if (error) return <div>Error !!!</div>;
	if (!data) return null;

	return <Movies movies={data} />;
}

export default MoviesContainer;
