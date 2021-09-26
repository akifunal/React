import { useState, useEffect } from 'react';
import { string } from 'prop-types';

const useSemiPersistentState = (key, initialState) => {
	const [value, setValue] = useState(localStorage.getItem(key) || initialState);
	useEffect(() => {
		localStorage.setItem(key, value);
	}, [value, key]);

	return [value, setValue];
};

useSemiPersistentState.propTypes = {
	key: string.isRequired,
	initialState: string.isRequired,
};

export default useSemiPersistentState;
