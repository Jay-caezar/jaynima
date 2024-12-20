/** @format */

import { useState } from 'react';

// library.add(fab, faCheckSquare, faCoffee);
const Search = () => {
	const [searchMovie, setSearchMovie] = useState('');

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
		</div>
	);
};

export default Search;
