/** @format */

import { useEffect, useState } from 'react';
import './App.css';
import Homepage from './pages/homePage/homePage.component';
import Navigation from './components/navigation/navigation.component';
// import MovieList from './components/moviesList/moviesList.component';
import BannerPreview from './components/bannerPreview/bannerPreview.component';
import Slider from './components/movieSlider/movieSlider.component';

// const apiKey = '74985f32';
const apiKey = 'fc30d6a5945368642d16632b1af8166c';
// const year = 2024;
const posterPrefixer = 'https://image.tmdb.org/t/p/original';

function App() {
	const [movies, setMovies] = useState([]);
	const [banner, setBanner] = useState({});
	const [genre, setGenre] = useState([]);

	const handleSetData = (id) => {
		setBanner(movies.find((movie) => movie.id === id));
	};

	const fetchData = () => {
		fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.results);
				setBanner(data.results[0]);
				console.log(data);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		fetchData();
	}, []);

	// console.log(movies);
	return (
		<div className='App'>
			<Homepage>
				<Navigation />
				<BannerPreview
					banner={posterPrefixer + banner.poster_path}
					title={banner.title}
					releaseDate={banner?.release_date}
					vote={banner?.vote_average}
					overview={banner?.overview}
					genre_ids={banner?.genre_ids}
					genre={genre}
					setGenre={setGenre}
					// moviesArr={movies}
					// handleSetData={handleSetData}
				/>
				<Slider
					moviesArr={movies}
					prefixer={posterPrefixer}
					setMovieHandlerFunc={handleSetData}
					setBanner={setBanner}
				/>
			</Homepage>
		</div>
	);
}

export default App;
