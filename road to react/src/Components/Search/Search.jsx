const Search = ({ onSearch, search }) => (
	<section className='search'>
		<label>Search</label>
		<input type='text' id='search' onChange={onSearch} value={search} />
		<p className='search-header'>
			Searching for <strong>{search}</strong>
		</p>
	</section>
);

export default Search;
