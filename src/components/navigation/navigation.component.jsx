/** @format */
import navListData from '../../data/navListData';
import NavListItem from '../../components/navigation/navListItem.components';
import './navigation.style.scss';
import Search from './../search/search.component';
const Navigation = ({ apiKey }) => {
	return (
		<nav className='nav_bar'>
			<a
				href='/'
				className='logo'>
				🍿Jaynima
			</a>

			<ul className='nav_list'>
				{navListData.map((item) => (
					<NavListItem
						key={item.id}
						name={item.name}
						link={item.link}
						active={item.active}
					/>
				))}
			</ul>
			<Search apiKey={apiKey} />
		</nav>
	);
};

export default Navigation;
