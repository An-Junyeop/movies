import axios from 'axios';

export const getNowPlayingMoviesAPI = async page => {
	const { data } = await axios.get(`
		https://api.themoviedb.org/3/movie/now_playing
		?api_key=e6bfb3c9270e0abb8070d30f2aa8ad8c
		&language=ko-KR
		&region=KR
		&page=${page}
	`);
	return data;
};

/* 영화 조건에 맞는 영화 검색 리스트 API 추가 */
export const getSearchMoviesAPI = async ({ genres, page }) => {
	const { data } = await axios.get(`
		https://api.themoviedb.org/3/discover/movie
		?api_key=e6bfb3c9270e0abb8070d30f2aa8ad8c
		&language=ko-KR
		&region=KR
		&page=${page}
		${genres}
	`);
	return data;
};
