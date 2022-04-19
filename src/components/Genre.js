import { useDispatch } from 'react-redux';
import { deselectGenre, selectGenre } from '../modules/genres';
import React, { useCallback } from 'react';

function Genre({ genre, isSelected }) {
	const dispatch = useDispatch();

	const onClick = useCallback(
		() => {
			isSelected
				? dispatch(deselectGenre(Number.parseInt(genre.id)))
				: dispatch(selectGenre(Number.parseInt(genre.id)));
		},
		[dispatch, genre.id, isSelected],
	);

	return (
		<span
			style={
				isSelected
					? {
							padding: '1px 3px',
							border: '1px solid black',
							borderRadius: '5px',
							color: 'white',
							background: 'black',
							marginRight: '3px',
							cursor: 'pointer',
					  }
					: {
							padding: '1px 3px',
							border: '1px solid black',
							borderRadius: '5px',
							marginRight: '3px',
							cursor: 'pointer',
					  }
			}
			onClick={onClick}
		>
			{genre.name}{' '}
		</span>
	);
}

export default React.memo(Genre);
