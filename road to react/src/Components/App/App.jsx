import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useReducer,
	useRef,
	useState,
} from 'react';

import axios from 'axios';

import List from '@List/List';
import InputWithLabel from '@InputWithLabel/InputWithLabel';
import useSemiPersistentState from '@hooks/useSemiPersistentState';

import ChildTest from '../Rerender Test Child/ChildTest';

const ContextTest = createContext();

export const useContextTest = () => {
	const contextTest = useContext(ContextTest);
	if (contextTest === undefined) {
		throw new Error(
			'useContextTest must be used within a ContextTest.Provider '
		);
	}
	return contextTest;
};

const storiesReducer = (state, action) => {
	switch (action.type) {
		case 'STORIES_FETCH_INIT':
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case 'STORIES_FETCH_SUCCESS':
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload,
			};
		case 'STORIES_FETCH_FAILURE':
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		case 'REMOVE_STORY':
			return {
				...state,
				data: state.data.filter(
					story => story.objectID !== action.payload.objectID
				),
			};
		default:
			throw new Error('action type not found!');
	}
};

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const App = () => {
	const refTest = useRef(null);

	const [stories, dispatchStories] = useReducer(storiesReducer, {
		data: [],
		isLoading: false,
		isError: false,
	});

	const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');

	const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`);

	const handleFetchStories = useCallback(() => {
		dispatchStories({ type: 'STORIES_FETCH_INIT' });

		axios
			.get(url)
			.then(result => {
				dispatchStories({
					type: 'STORIES_FETCH_SUCCESS',
					payload: result.data.hits,
				});
			})
			.catch(() => dispatchStories({ type: 'STORIES_FETCH_FAILURE' }));
	}, [url]);

	useEffect(() => handleFetchStories(), [handleFetchStories]);

	const handleRemoveStory = item => {
		dispatchStories({
			type: 'REMOVE_STORY',
			payload: item,
		});
	};

	const handleSearchInput = e => {
		setSearchTerm(e.target.value);
	};

	const handleSearchSubmit = e => {
		setUrl(`${API_ENDPOINT}${searchTerm}`);
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
						ref={refTest}
						id='search'
						isFocused
						value={searchTerm}
						onInputChange={handleSearchInput}>
						<strong>Search:</strong>
						<ChildTest />
						<ChildTest />
					</InputWithLabel>
				</ContextTest.Provider>

				<button
					className='px-2 py-1 ml-8 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-400'
					type='button'
					disabled={!searchTerm}
					onClick={handleSearchSubmit}>
					Submit
				</button>

				<hr className='my-4' />

				{stories.isError ? (
					<p className='flex items-center justify-center h-full text-5xl dark:text-white-default'>
						Something went wrong...
					</p>
				) : stories.isLoading ? (
					<p className='flex items-center justify-center h-full text-5xl dark:text-white-default'>
						Loading...
					</p>
				) : (
					<List list={stories.data} onRemoveItem={handleRemoveStory} />
				)}
			</main>
		</>
	);
};

export default App;
