import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Movies({ movies }) {
	useEffect(() => {
		console.log('Movies Mount');
	});

	const paging = () => {
		let pages = [];

		for (let i = 1; i <= movies.total_pages; i++) {
			const isActive = movies.page === i;

			pages.push(
				<Link
					key={i}
					to={`/movies?page=${i}`}
					style={
						isActive
							? {
									textDecoration: 'none',
									margin: '0 20px',
									color: 'red',
							  }
							: {
									textDecoration: 'none',
									margin: '0 20px',
							  }
					}
				>
					{i}
				</Link>,
			);
		}

		return pages;
	};

	return (
		<>
			{/* Paging */}
			<div
				style={{
					marginBottom: '15px',
					textAlign: 'center',
					overflow: 'auto',
				}}
			>
				{paging()}
			</div>

			{/* Movie List */}
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{movies.results.map(movie => {
					return (
						<Link
							to={`/movies/${movie.id}`}
							key={movie.id}
							style={{
								width: '25%',
								display: 'flex',
								flexDirection: 'column',
								padding: '10px',
								boxSizing: 'border-box',
							}}
						>
							<img
								src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
								alt={movie.title}
							/>
						</Link>
					);
				})}
			</div>
		</>
	);
}

export default Movies;
