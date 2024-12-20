/** @format */
import { useEffect } from 'react';
import Button from '../button/button.component';
import './movieHighlight.style.scss';

const MovieHighlight = ({ className, title, releaseDate, vote, overview, setGenre, genre, genre_ids }) => {
	const fetchGenre = () =>
		fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=fc30d6a5945368642d16632b1af8166c&language=en-US`, genre_ids)
			.then((res) => res.json())
			.then((res) => {
				setGenre(res.genres);
			})
			.catch((err) => console.error(err));

	useEffect(() => {
		fetchGenre();
	}, []);

	console.log(genre);

	return (
		<div className={className}>
			<div className='movie_stat'>
				<div className='info'>
					{genre?.map((movieGenre) => genre_ids?.find((genre) => genre === movieGenre.id) && <span>{movieGenre.name}</span>)}
				</div>
				<div className='info'>
					<ion-icon name='calendar-outline'></ion-icon>
					{releaseDate}
				</div>
				<div className='info'>
					<ion-icon name='star'></ion-icon>
					{vote}
				</div>
			</div>

			<h1 className='title'>{title}</h1>
			<p className='about_movie'>{overview}</p>

			<div className='button_container'>
				<Button className='primary_button'>
					<ion-icon name='play'></ion-icon> Watch Trailer
				</Button>
				<Button className='secondary_button'>
					<ion-icon name='add-outline'></ion-icon> Add to list
				</Button>
			</div>
		</div>
	);
};

export default MovieHighlight;
