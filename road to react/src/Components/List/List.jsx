import Item from '@Item/Item';
import { shape, arrayOf, number } from 'prop-types';

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
	list: arrayOf(
		shape({
			objectID: number.isRequired,
		})
	).isRequired,
};

export default List;
