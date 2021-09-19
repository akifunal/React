const Item = ({ item }) => {
	return (
		<div className='flex justify-start gap-3 p-4 dark:text-gray-200'>
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
