import Item from '@Item/Item';
import PropTypes from 'prop-types';

const List = ({ list }) => {
	return list.length > 0 ? (
		<section id='result-list'>
			{list.map(
				({ objectID, ...item }) => (
					<Item key={objectID} item={item} />
				),
				document.getElementById('list')
			)}
		</section>
	) : null;
};

List.propTypes = {
	list: PropTypes.arrayOf(
		PropTypes.shape({
			objectID: PropTypes.number.isRequired,
			...Item.propTypes.item,
		})
	).isRequired,
};

export default List;
