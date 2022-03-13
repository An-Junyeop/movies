function Movies({ movies }) {
	return (
		<>
			{movies.results.map(movie => {
				return (
					<div key={movie.id}>
						<img
							src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
							alt={movie.title}
						/>
						<p>{movie.title}</p>
						<hr />
					</div>
				);
			})}
		</>
	);
}

export default Movies;
