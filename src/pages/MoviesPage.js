import { useSearchParams } from 'react-router-dom';
import MoviesContainer from '../container/MoviesContainer';

function MoviesPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const page = searchParams.get('page');

	return <MoviesContainer page={page} />;
}

export default MoviesPage;
