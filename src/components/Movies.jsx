import { Link } from 'react-router-dom';
import Paging from './Paging';

function Movies({ movies }) {
	const { total_pages, page, results } = movies;

	console.log(total_pages, page, results);

	return (
		<>
			<div
				style={{
					marginBottom: '15px',
					textAlign: 'center',
					overflow: 'auto',
				}}
			>
				<Paging totalPage={total_pages} page={page} />
			</div>

			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					alignItems: 'stretch',
					gap: 20,
				}}
			>
				{results.map(movie => {
					return (
						<Link
							to={`/movies/${movie.id}`}
							key={movie.id}
							style={{
								flex: '1 1 20%',
							}}
						>
							<div
								style={{
									width: '100%',
									height: 0,
									paddingTop: '150%',
									backgroundImage: `url('https://image.tmdb.org/t/p/w400/${movie.poster_path}')`,
									backgroundSize: 'cover',
									border: '1px solid black',
									borderRadius: 10,
								}}
							></div>
						</Link>
					);
				})}
			</div>
		</>
	);
}

export default Movies;
