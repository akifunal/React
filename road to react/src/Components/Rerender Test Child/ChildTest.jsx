import { useContextTest } from '@SearchForm/SearchForm';
import { useEffect } from 'react';

const ChildTest = () => {
	const { searchTerm, onSearchInput } = useContextTest();

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setStateTest('selamlar');
	// 	}, 1500);
	// }, []);

	return (
		<div>
			<p>{`Context: ${searchTerm}`}</p>
		</div>
	);
};

export default ChildTest;
