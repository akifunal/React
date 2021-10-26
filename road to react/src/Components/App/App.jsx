import axios from 'axios'
import {
	useCallback,
	useEffect,
	useReducer,
	useRef,
	useState,
	Suspense,
	lazy,
} from 'react'

import useSemiPersistentState from '@hooks/useSemiPersistentState'

// import List from '@List/List'
import SearchForm from '@SearchForm/SearchForm'

// const List = lazy(() => import('@List/List'))

// Preloading a lazy component
const listPromise = import('@List/List')
const List = lazy(() => listPromise)

const storiesReducer = (state, action) => {
	switch (action.type) {
		case 'STORIES_FETCH_INIT':
			return {
				...state,
				isLoading: true,
				isError: false,
			}
		case 'STORIES_FETCH_SUCCESS':
			return {
				...state,
				isLoading: false,
				isError: false,
				data: action.payload,
			}
		case 'STORIES_FETCH_FAILURE':
			return {
				...state,
				isLoading: false,
				isError: true,
			}
		case 'REMOVE_STORY':
			return {
				...state,
				data: state.data.filter(
					story => story.objectID !== action.payload.objectID
				),
			}
		default:
			throw new Error('action type not found!')
	}
}

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query='

const App = () => {
	const refTest = useRef(null)

	const [stories, dispatchStories] = useReducer(storiesReducer, {
		data: [],
		isLoading: false,
		isError: false,
	})

	const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React')

	const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`)

	const handleFetchStories = useCallback(async () => {
		try {
			dispatchStories({ type: 'STORIES_FETCH_INIT' })

			const result = await axios.get(url)

			dispatchStories({
				type: 'STORIES_FETCH_SUCCESS',
				payload: result.data.hits,
			})
		} catch (error) {
			dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
		}
	}, [url])

	useEffect(() => handleFetchStories(), [handleFetchStories])

	const handleRemoveStory = useCallback(item => {
		dispatchStories({
			type: 'REMOVE_STORY',
			payload: item,
		})
	}, [])

	const handleSearchInput = e => {
		setSearchTerm(e.target.value)
	}

	const handleSearchSubmit = e => {
		e.preventDefault()
		setUrl(`${API_ENDPOINT}${searchTerm}`)
	}

	return (
		<>
			<header className='p-3'>
				<h1 className='w-1/4 text-4xl text-center text-gray-600 dark:text-gray-200'>
					My Hacker Stories
				</h1>
			</header>

			<main>
				<SearchForm
					searchTerm={searchTerm}
					onSearchInput={handleSearchInput}
					onSearchSubmit={handleSearchSubmit}
					ref={refTest}
				/>

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
					<Suspense
						fallback={
							<h1 className='flex items-center justify-center h-full text-5xl dark:text-white-default'>
								Suspense fallback
							</h1>
						}>
						<List list={stories.data} onRemoveItem={handleRemoveStory} />
					</Suspense>
				)}
			</main>
		</>
	)
}

export default App
