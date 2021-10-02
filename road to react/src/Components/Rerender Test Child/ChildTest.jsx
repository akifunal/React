import { useContext } from 'react';

import { ContextTest } from '@App/App';

const ChildTest = () => {
	const { searchTerm } = useContext(ContextTest);
	return (
		<div>
			<p>{searchTerm}</p>
		</div>
	);
};

export default ChildTest;
