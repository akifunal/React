import Item from '@Item/Item';

const List = ({ list }) => {
	return list.length > 0 ? (
		<section className='result-list'>
			{list.map(
				({ objectID, ...item }) => (
					<Item key={objectID} item={item} />
				),
				document.getElementById('list')
			)}
		</section>
	) : null;
};

export default List;
