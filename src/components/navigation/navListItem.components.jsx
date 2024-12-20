/** @format */

const NavListItem = ({ name }) => {
	return (
		<li className='link'>
			<a
				href='/movies'
				className='link'>
				{name}
			</a>
		</li>
	);
};

export default NavListItem;
