import { useSearchParams } from 'react-router-dom';
import MoviesContainer from '../container/MoviesContainer';
import GenresContainer from '../container/GenresContainer';

function MoviesPage() {
	const [searchParams] = useSearchParams();
	const page = searchParams.get('page');

	return (
		<div
			style={{
				width: '1280px',
				margin: '55px auto 15px auto',
			}}
		>
			{/* Genres */}
			<GenresContainer />
			<MoviesContainer page={page} />
		</div>
	);
}

export default MoviesPage;
