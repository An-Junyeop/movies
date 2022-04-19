import React from 'react';
import Genre from './Genre';

function Genres({ genres, selectedGenres }) {
	return (
		<>
			{genres.map(genre => (
				<Genre
					key={genre.id}
					genre={genre}
					isSelected={selectedGenres.includes(genre.id)}
				/>
			))}
		</>
	);
}

export default React.memo(Genres);
