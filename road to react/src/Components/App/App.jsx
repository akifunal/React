import List from '@List/List';
import InputWithLabel from '@InputWithLabel/InputWithLabel';
import useSemiPersistentState from '@Hooks/useSemiPersistentState';

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

	const [searchTerm, setSearchTerm] = useSemiPersistentState('state', 'React');

	const searchedStories = stories.filter(story =>
		story.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleSearch = e => {
		setSearchTerm(e.target.value);
	};

	return (
		<>
			<header>
				<h1>My Hacker Stories</h1>
			</header>
			<main>
				<InputWithLabel
					id='search'
					label='Search:'
					value={searchTerm}
					onInputChange={handleSearch}
				/>
				<hr />
				<List list={searchedStories} />
			</main>
		</>
	);
};

export default App;
