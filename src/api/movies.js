import axios from 'axios';

export const getMoviesAPI = async page => {
	const { data } = await axios.get(`
		https://api.themoviedb.org/3/movie/now_playing
		?api_key=e6bfb3c9270e0abb8070d30f2aa8ad8c
		&language=ko-KR
		&page=${page}
	`);
	return data;
};
