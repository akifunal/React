import { useState, useEffect } from 'react';

const useSemiPersistentState = () => {
	const [searchTerm, setSearchTerm] = useState(
		localStorage.getItem('search') || 'React'
	);

	useEffect(() => {
		localStorage.setItem('search', searchTerm);
	}, [searchTerm]);

	return [searchTerm, setSearchTerm];
};

export default useSemiPersistentState;
