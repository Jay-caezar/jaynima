/** @format */
import './movieCard.style.scss';

const MovieCard = ({ img, keyid, handleSetData, setMovieHandlerFunc, setBanner }) => {
	// console.log('key: ' + keyid);
	return (
		<div
			key={keyid}
			className='movie_card'
			onClick={() => setMovieHandlerFunc(keyid)}>
			<img
				src={img}
				alt=''
			/>
		</div>
	);
};

export default MovieCard;
