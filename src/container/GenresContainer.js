import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getGenres } from '../modules/genres';
import Genres from '../components/Genres';

function GenresContainer() {
	const { loading, data, error } = useSelector(state => state.genres.genres);
	const selectedGenres = useSelector(state => state.genres.selectedGenres);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!data) {
			dispatch(getGenres(null));
		}
	}, [data, dispatch]);

	if (loading) return <div>Loading ...</div>;
	if (error) return <div>Error !!!</div>;
	if (!data) return null;

	return <Genres genres={data.genres} selectedGenres={selectedGenres} />;
}

export default React.memo(GenresContainer);