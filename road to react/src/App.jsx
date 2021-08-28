import { useState, useEffect } from 'react';
import List from './Components/List';
import Search from './Components/Search';

const App = () => {
	const stories = [
		{
			title: 'React',
			url: 'https://reactjs.org/',
			author: 'Jordan Walke',
			num_comments: 3,
			points: 4,
			objectID: 0,
		},
		{
			title: 'Redux',
			url: 'https://redux.js.org/',
			author: 'Dan Abramov, Andrew Clark',
			num_comments: 2,
			points: 5,
			objectID: 1,
		},
	];

	const [searchTerm, setSearchTerm] = useState(
		localStorage.getItem('search') || 'React'
	);

	useEffect(() => {
		localStorage.setItem('search', searchTerm);
	}, [searchTerm]);

	const searchedStories = stories.filter(story =>
		story.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleSearch = e => {
		setSearchTerm(e.target.value);
	};

	return (
		<div>
			<h1>My Hacker Stories</h1>
			<Search onSearch={handleSearch} search={searchTerm} />
			<hr />
			<List list={searchedStories} />
		</div>
	);
};

export default App;