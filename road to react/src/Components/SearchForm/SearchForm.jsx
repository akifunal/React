// @ts-nocheck
import { createContext, useContext, forwardRef } from 'react'

import { ChildTest, InputWithLabel } from '@components/index'

const ContextTest = createContext()

export const useContextTest = () => {
	const contextTest = useContext(ContextTest)
	if (contextTest === undefined) {
		throw new Error(
			'useContextTest must be used within a ContextTest.Provider '
		)
	}
	return contextTest
}

const SearchForm = forwardRef(
	({ searchTerm, onSearchInput, onSearchSubmit }, ref) => {
		return (
			<form onSubmit={onSearchSubmit}>
				<ContextTest.Provider value={{ searchTerm, onSearchInput }}>
					<InputWithLabel
						ref={ref}
						id='search'
						isFocused
						value={searchTerm}
						onInputChange={onSearchInput}>
						<strong>Search:</strong>
						<ChildTest />
					</InputWithLabel>
				</ContextTest.Provider>

				<button
					className='px-2 py-1 ml-8 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-400'
					type='submit'
					disabled={!searchTerm}>
					Submit
				</button>
			</form>
		)
	}
)

SearchForm.displayName = 'SearchForm'

export default SearchForm
