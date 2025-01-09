/** @format */

import { useState, useEffect } from 'react';
import './search.style.scss';

const Search = ({ apiKey }) => {
	const [searchMovie, setSearchMovie] = useState('');
	const [searchedMovieList, setSearchedMovieList] = useState([]);
	const [searched, setSearched] = useState(false);

	useEffect(() => {
		const fetchSearchedMovieList = async () => {
			if (!searchMovie) {
				setSearched(false);
				return;
			}
			try {
				const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchMovie}&api_key=${apiKey}`);
				const data = await response.json();
				console.log(data.results);
				setSearchedMovieList(data.results);
				setSearched('true');
			} catch (error) {
				console.error('Error fetching movie list:', error);
			}
		};
		fetchSearchedMovieList();
	}, [searchMovie, apiKey]);

	console.log(searchedMovieList, searchMovie);

	return (
		<div className='search'>
			<input
				type='search'
				name=''
				id=''
				placeholder='Search movie'
				value={searchMovie}
				onChange={(e) => {
					setSearchMovie(e.target.value);
				}}
			/>

			<ion-icon name='search-outline'></ion-icon>

			{/* {searchedMovieList.length === 0 && (
				<div
					className='matched_movies-card'
					style={{ display: 'none' }}></div>
			)} */}

			{searched && (
				<div className='matched_movies-card'>
					{searchedMovieList.map((movie) => (
						<div
							key={movie.id}
							className='matched_movie'>
							<img
								src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
								alt=''
							/>

							<div className='movie_info'>
								<h3 className='title'>{movie.title}</h3>
								<p className='year'>{movie.release_date}</p>
							</div>
						</div>
					))}
					{searchedMovieList.length === 0 && <p>No movies found</p>}
				</div>
			)}
		</div>
	);
};

export default Search;
