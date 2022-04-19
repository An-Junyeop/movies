import axios from 'axios';

export const getGenresAPI = async () => {
	const { data } = await axios.get(`
	https://api.themoviedb.org/3/genre/movie/list
	?api_key=e6bfb3c9270e0abb8070d30f2aa8ad8c
	&language=ko-KR`);

	return data;
};
