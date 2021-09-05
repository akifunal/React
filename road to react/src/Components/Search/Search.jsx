const Search = ({ onSearch, search }) => (
	<section className='search'>
		<label htmlFor='search'>Search: </label>
		<input type='text' id='search' onChange={onSearch} value={search} />
	</section>
);

export default Search;
