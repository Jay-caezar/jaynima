/** @format */

import MovieHighlight from '../movieHighlight/movieHighlight.component';
import './bannerPreview.styles.scss';
// import { useState } from 'react';

const BannerPreview = ({ banner, title, releaseDate, vote, overview, setGenre, genre, genre_ids }) => {
	console.log(banner);
	return (
		<div
			className='banner'
			style={{ background: `linear-gradient(to right, rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7) ), url(${banner})` }}>
			{/* <div className='poster_container'>
				<img
					src={`${banner}`}
					alt='banner'
					className='movie_poster'
				/>
			</div> */}

			<div className='movie_info'>
				<MovieHighlight
					className='Movie_info big_highlight'
					title={title}
					releaseDate={releaseDate}
					vote={vote}
					overview={overview}
					genre={genre}
					setGenre={setGenre}
					genre_ids={genre_ids}
				/>
			</div>
		</div>
	);
};

export default BannerPreview;
