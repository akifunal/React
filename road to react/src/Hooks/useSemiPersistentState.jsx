import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const useSemiPersistentState = (key, initialState) => {
	const [value, setValue] = useState(localStorage.getItem(key) || initialState);

	useEffect(() => {
		localStorage.setItem(key, value);
	}, [value, key]);

	return [value, setValue];
};

useSemiPersistentState.propTypes = {
	key: PropTypes.string.isRequired,
	initialState: PropTypes.string.isRequired,
};

export default useSemiPersistentState;
