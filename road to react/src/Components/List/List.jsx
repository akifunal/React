import React from 'react';
import { arrayOf, shape, number } from 'prop-types';
import Item from '@Item/Item';
import Hoc from '@Hoc/Hoc';

const List = ({ list }) =>
	list.length > 0 ? (
		<section id='result-list'>
			{list.map(({ objectID, ...item }) => {
				const ItemEnhanced = Hoc(Item, 'ItemWithBg');

				return (
					<React.Fragment key={objectID}>
						<ItemEnhanced item={item} />
						<Item item={item} />
					</React.Fragment>
				);

				// return <Item key={objectID} item={item} />;
			})}
		</section>
	) : null;

List.propTypes = {
	list: arrayOf(
		shape({
			objectID: number.isRequired,
		})
	).isRequired,
};

export default List;
