/** @format */
// import { useEffect, useState } from 'react';
import MovieCard from './../movieCard/movieCard.component';
import './movieSlider.styles.scss';

const Slider = ({ moviesArr, prefixer, setMovieHandlerFunc, setBanner }) => {
	// console.log(moviesArr);
	return (
		<div className='slider_container'>
			<div className='slide'>
				{moviesArr &&
					moviesArr.length > 0 &&
					moviesArr.map((movie) => {
						// console.log('movie: ' + JSON.stringify(movie, null, 2));
						return (
							<MovieCard
								key={movie.id}
								keyid={movie.id}
								img={prefixer + movie.poster_path}
								title={movie.title}
								setMovieHandlerFunc={setMovieHandlerFunc}
								setBanner={setBanner}
							/>
						);
					})}
			</div>
		</div>
	);
};

export default Slider;
