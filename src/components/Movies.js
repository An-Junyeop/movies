import { Link, NavLink } from 'react-router-dom';

function Movies({ movies }) {
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
		<div
			style={{
				width: '1280px',
				margin: '55px auto 15px auto',
			}}
		>
			{/* Paging */}
			<div
				style={{
					marginBottom: '15px',
					textAlign: 'center',
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
					alignItems: 'flex-start',
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
							<p
								style={{
									height: '15px',
								}}
							>
								{movie.title}
							</p>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default Movies;
