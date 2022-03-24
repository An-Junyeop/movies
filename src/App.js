import { Route, Routes, Navigate } from 'react-router-dom';
import MovieContainer from './container/MovieContainer';
import Layout from './components/Layout';
import MoviesPage from './pages/MoviesPage';

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route
					index
					element={<Navigate to='/movies' replace={true} />}
				/>
				<Route path='/movies' element={<MoviesPage />} />
				<Route path='/movies/:id' element={<MovieContainer />} />
			</Route>
		</Routes>
	);
}

export default App;
