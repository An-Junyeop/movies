import React from 'react';
import Genre from './Genre';

function Genres({ genres, onClick, isAccumulated }) {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'start',
				flexWrap: 'wrap',
				gap: 10,
			}}
		>
			{genres.map(genre => (
				<Genre
					key={genre.id}
					genre={genre}
					onClick={onClick}
					isAccumulated={isAccumulated}
				/>
			))}
		</div>
	);
}

export default React.memo(Genres);
