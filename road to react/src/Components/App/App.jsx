// @ts-nocheck
import axios from 'axios'
import TwinSpin from 'react-cssfx-loading/lib/TwinSpin'
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
import { SearchForm } from '@components/index'

//const List = lazy(() => import('@List/List'))

// Preloading a lazy component
const listPromise = import('@List/List')
const List = lazy(() => listPromise)

const getSumComments = stories => {
	return stories.reduce((result, value) => result + value.num_comments, 0)
}

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

	const sumComments = () => getSumComments(stories.data)

	const handleRemoveStory = item => {
		dispatchStories({
			type: 'REMOVE_STORY',
			payload: item,
		})
	}

	const handleSearchInput = ({ target: { value } }) => {
		setSearchTerm(value)
	}

	const handleSearchSubmit = e => {
		e.preventDefault()
		setUrl(`${API_ENDPOINT}${searchTerm}`)
	}

	return (
		<>
			<header className='p-3'>
				<h1 className='text-4xl text-center text-gray-600 w-max dark:text-gray-200'>
					My Hacker Stories with {sumComments} comments.
				</h1>
			</header>

			<main className='flex flex-col flex-grow'>
				<SearchForm
					searchTerm={searchTerm}
					onSearchInput={handleSearchInput}
					onSearchSubmit={handleSearchSubmit}
					ref={refTest}
				/>
				<hr className='my-4' />
				{stories.isError && (
					<p className='flex items-center justify-center h-full text-5xl dark:text-white-default'>
						Something went wrong...
					</p>
				)}
				{stories.isLoading ? (
					<div className='flex items-center justify-center flex-grow'>
						<TwinSpin color='#FF0000' width='10rem' height='10rem' />
					</div>
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
