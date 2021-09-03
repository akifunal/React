import Item from '@Item/Item';

const List = ({ list }) => {
	return list.map(({ objectID, ...item }) => (
		<Item key={objectID} item={item} />
	));
};

export default List;
