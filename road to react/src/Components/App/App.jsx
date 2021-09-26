import { useState } from 'react';

import List from '@List/List';
import InputWithLabel from '@InputWithLabel/InputWithLabel';
import useSemiPersistentState from '@hooks/useSemiPersistentState';

import ChildTest from '../Rerender Test Child/ChildTest';

const initialStories = [
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

const App = () => {
	const [stories, setStories] = useState(initialStories);
	const [searchTerm, setSearchTerm] = useSemiPersistentState('state', 'React');

	const searchedStories = stories.filter(story =>
		story.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleSearch = e => {
		setSearchTerm(e.target.value);
	};

	const handleRemoveStory = item => {
		setStories(prevStories => {
			return prevStories.filter(story => item.objectID !== story.objectID);
		});
	};

	return (
		<>
			<header className='p-3'>
				<h1 className='w-1/4 text-4xl text-center text-gray-600 dark:text-gray-200'>
					My Hacker Stories
				</h1>
			</header>
			<main>
				<InputWithLabel
					id='search'
					isFocused
					value={searchTerm}
					onInputChange={handleSearch}>
					<strong>Search:</strong>
					<ChildTest />
					<ChildTest />
				</InputWithLabel>
				<hr className='my-4' />
				<List list={searchedStories} onRemoveItem={handleRemoveStory} />
			</main>
		</>
	);
};

export default App;
