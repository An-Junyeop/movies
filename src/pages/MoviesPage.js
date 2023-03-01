import { useSearchParams } from 'react-router-dom';
import MoviesContainer from '../container/MoviesContainer';
import GenresContainer from '../container/GenresContainer';

function MoviesPage() {
	const [searchParams] = useSearchParams();
	const page = searchParams.get('page');

	return (
		<div
			style={{
				maxWidth: '1280px',
				margin: '55px auto 15px auto',
			}}
		>
			<GenresContainer isAccumulated />
			<MoviesContainer page={page} />
		</div>
	);
}

export default MoviesPage;
