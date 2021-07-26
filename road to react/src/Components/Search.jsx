const Search = ({ onSearch, search }) => (
	<>
		<label htmlFor='search'>Search</label>
		<input type='text' id='search' onChange={onSearch} value={search} />
		<p>
			Searching for <strong>{search}</strong>
		</p>
	</>
);

export default Search;
