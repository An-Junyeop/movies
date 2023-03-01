import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	deselectGenre,
	resetSelectedGenres,
	selectGenre,
} from '../modules/genres';

function Genre({ genre, onClick, isAccumulated }) {
	const genres = useSelector(state => state.genres.genres.data);
	const dispatch = useDispatch();

	return (
		<span
			style={{
				padding: '0px 10px',
				display: 'flex',
				alignItems: 'center',
				border: '1px solid black',
				borderRadius: '5px',
				cursor: 'pointer',
				...(genre.isSelected
					? {
							background: 'black',
							color: 'white',
					  }
					: {}),
			}}
			onClick={() => {
				const isSelected = genres
					.filter(genre => genre.isSelected)
					.includes(genre);

				if (isSelected) {
					dispatch(deselectGenre(genre.id));
				} else {
					if (!isAccumulated) {
						dispatch(resetSelectedGenres());
					} else {
						dispatch(selectGenre(genre.id));
					}
				}

				onClick?.();
			}}
		>
			{genre.name}
		</span>
	);
}

export default React.memo(Genre);
