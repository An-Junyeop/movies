import React from 'react';
import Genre from './Genre';

function Genres({ genres }) {
	return (
		<>
			{genres.map(genre => (
				<Genre
					key={genre.id}
					genre={genre}
				/>
			))}
		</>
	);
}

export default React.memo(Genres);
