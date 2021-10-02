import { createContext, useEffect, useState } from 'react';

import List from '@List/List';
import InputWithLabel from '@InputWithLabel/InputWithLabel';
import useSemiPersistentState from '@hooks/useSemiPersistentState';

import ChildTest from '../Rerender Test Child/ChildTest';

export const ContextTest = createContext({
	text: 'Default value',
	setText: () => {},
});

const contextTestText = 'Selamlar context';

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

const getAsyncStories = () =>
	new Promise(resolve => {
		setTimeout(() => resolve({ data: { stories: initialStories } }), 1500);
	});

const App = () => {
	const [stories, setStories] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [searchTerm, setSearchTerm] = useSemiPersistentState('state', 'React');

	useEffect(() => {
		getAsyncStories()
			.then(res => {
				setStories(res.data.stories);
				setIsLoading(prevIsLoading => !prevIsLoading);
				throw new Error('Something went wrong');
			})
			.catch(() => setIsError(true));
	}, []);

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
				<ContextTest.Provider value={{ searchTerm, setSearchTerm }}>
					<InputWithLabel
						id='search'
						isFocused
						value={searchTerm}
						onInputChange={handleSearch}>
						<strong>Search:</strong>
						<ChildTest />
						<ChildTest />
					</InputWithLabel>
				</ContextTest.Provider>

				<hr className='my-4' />
				{isError ? (
					<p className='flex items-center justify-center h-full text-5xl dark:text-white-default'>
						Something went wrong...
					</p>
				) : isLoading ? (
					<p className='flex items-center justify-center h-full text-5xl dark:text-white-default'>
						Loading...
					</p>
				) : (
					<List list={searchedStories} onRemoveItem={handleRemoveStory} />
				)}
			</main>
		</>
	);
};

export default App;
