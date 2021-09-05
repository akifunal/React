const Item = ({ item }) => {
	return (
		<div className='item'>
			<span>
				<a href={item.url}>{item.title}</a>
			</span>
			<span>{item.author}</span>
			<span>{item.num_comments}</span>
			<span>{item.points}</span>
		</div>
	);
};

export default Item;
