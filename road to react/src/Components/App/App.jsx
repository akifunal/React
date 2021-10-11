import {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useRef,
} from 'react';

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

const getAsyncStories = () =>
	new Promise(resolve => {
		setTimeout(() => resolve({ data: { stories: initialStories } }), 1500);
	});

const App = () => {
	const refTest = useRef(null);
	//const [stories, setStories] = useState([]);
	const [stories, dispatchStories] = useReducer(storiesReducer, {
		data: [],
		isLoading: false,
		isError: false,
	});

	const [searchTerm, setSearchTerm] = useSemiPersistentState('state', 'React');

	useEffect(() => {
		dispatchStories({ type: 'STORIES_FETCH_INIT' });

		getAsyncStories()
			.then(result => {
				dispatchStories({
					type: 'STORIES_FETCH_SUCCESS',
					payload: result.data.stories,
				});

				// dispatchStories({ type: 'SET_STORIES', payload: result.data.stories });
				// setIsLoading(false);
				//throw new Error('Something went wrong');
			})
			.catch(
				() => dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
				// setIsError(true)
			);
	}, []);

	const searchedStories = stories.data.filter(story =>
		story.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleSearch = e => {
		setSearchTerm(e.target.value);
	};

	const handleRemoveStory = item => {
		dispatchStories({
			type: 'REMOVE_STORY',
			payload: item,
		});
	};

	console.log('test ', refTest.current);

	return (
		<>
			<header className='p-3'>
				<h1
					ref={refTest}
					className='w-1/4 text-4xl text-center text-gray-600 dark:text-gray-200'>
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
						onInputChange={handleSearch}>
						<strong>Search:</strong>
						<ChildTest />
						<ChildTest />
					</InputWithLabel>
				</ContextTest.Provider>

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
					<List list={searchedStories} onRemoveItem={handleRemoveStory} />
				)}
			</main>
		</>
	);
};

export default App;
