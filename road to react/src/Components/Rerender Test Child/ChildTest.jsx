import { useContextTest } from '@SearchForm/SearchForm'

const ChildTest = () => {
	const { searchTerm } = useContextTest()

	return (
		<div>
			<p>{`Context: ${searchTerm}`}</p>
		</div>
	)
}

export default ChildTest
