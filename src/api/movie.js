import axios from 'axios';

export const getMovieDetailByIdAPI = async id => {
	const { data } = await axios.get(`
		https://api.themoviedb.org/3/movie/${id}
		?api_key=e6bfb3c9270e0abb8070d30f2aa8ad8c
		&language=ko-KR
		&append_to_response=videos,images,keywords,credits,genres,release_dates,recommendations,similar
		&include_image_language=ko,null
	`);
	return data;
};
