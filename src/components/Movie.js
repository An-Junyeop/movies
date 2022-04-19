import { useNavigate, Link } from 'react-router-dom';
import Genre from './Genre';

function Movie({ movie }) {
	const navigate = useNavigate();
	const {
		credits,
		genres,
		keywords,
		production_companies,
		videos,
		release_dates,
	} = movie;
	const {
		id, // 고유 아이디
		overview, // 영화 소개
		backdrop_path, // Backdrop 이미지
		poster_path, // Poster 이미지
		runtime, // 영화 시간
		tagline, // 영화 슬로건
		title, // 영화 제목
		vote_average, // 평점
		release_date, // 개봉일
	} = movie;

	/* 인증(연령 제한) */
	const getCertification = () => {
		const date = release_dates.results.filter(
			date => date.iso_3166_1 === 'KR',
		);
		return date.length ? date[0].release_dates[0].certification : '';
	};

	/* 감독 */
	const director = credits.crew.filter(
		people => people.job === 'Director',
	)[0];

	/* 출연 배우 중 캐스팅 순위 5명까지 */
	const actors = credits.cast.filter(people => people.order <= 4);

	return (
		<div
			style={{
				marginTop: '40px',
			}}
		>
			<div
				style={{
					fontSize: '20px',
					cursor: 'pointer',
				}}
				onClick={() => {
					navigate(-1);
				}}
			>
				목록으로
			</div>

			<div style={{ width: '100%' }}>
				<img
					style={{ width: '100%' }}
					src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
					alt={title}
				/>
			</div>
			<div style={{ width: '100%' }}>
				<img
					style={{ width: '100%' }}
					src={`https://image.tmdb.org/t/p/original/${poster_path}`}
					alt={title}
				/>
			</div>
			<div>id: {id}</div>
			<div>title: {title}</div>
			<div>tagline: {tagline}</div>
			<div>overview: {overview}</div>
			<div>runtime: {runtime}</div>
			<div>vote_average: {vote_average}</div>
			<div>release_date: {release_date}</div>
			<div>certification: {getCertification()}</div>
			<div>
				director: {director.id}, {director.name}
			</div>
			<div>
				actors:{' '}
				{actors.map(actor => (
					<span key={actor.id}>
						{actor.id}, {actor.name} |{' '}
					</span>
				))}
			</div>
			<div>
				genres:{' '}
				{genres.length &&
					genres.map(genre => (
						<Link to='/' key={genre.id}>
							<Genre genre={genre} />
						</Link>
					))}
			</div>
			<div>
				keywords:{' '}
				{keywords.keywords.length &&
					keywords.keywords.map(keyword => (
						<span key={keyword.id}>
							{keyword.id}, {keyword.name} |{' '}
						</span>
					))}
			</div>
			<div>
				production_companies:{' '}
				{production_companies.length &&
					production_companies.map(company => (
						<span key={company.id}>
							{company.id}, {company.name} |{' '}
						</span>
					))}
			</div>
			<div>
				videos:{' '}
				{videos.results.length &&
					videos.results.map(video => (
						<span key={video.id}>
							<a
								target='_blank'
								href={`https://www.youtube.com/watch?v=${video.key}`}
								rel='noreferrer'
							>
								{video.type}
							</a>{' '}
						</span>
					))}
			</div>
		</div>
	);
}

export default Movie;
