import { useState, useEffect, useRef } from 'react'
import { string } from 'prop-types'

const useSemiPersistentState = (key, initialState) => {
	// ismounted ref to check if component is mounted
	const isMounted = useRef(false)

	const [value, setValue] = useState(localStorage.getItem(key) || initialState)

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true // set to true when component is mounted
		} else {
			localStorage.setItem(key, value)
		}
	}, [key, value])

	return [value, setValue]
}

useSemiPersistentState.propTypes = {
	key: string.isRequired,
	initialState: string.isRequired,
}

export default useSemiPersistentState
