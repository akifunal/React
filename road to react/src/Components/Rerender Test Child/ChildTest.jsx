import { useContextTest } from '@App/App';

const ChildTest = () => {
	const { searchTerm } = useContextTest();
	return (
		<div>
			<p>{`Context: ${searchTerm}`}</p>
		</div>
	);
};

export default ChildTest;
