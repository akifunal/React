import React from 'react';
import Item from '@Item/Item';
import { shape, arrayOf, number } from 'prop-types';
import Hoc from '../Hoc/Hoc';
import ChildTest from '../Rerender Test Child/ChildTest';
// const Test = Hoc(Item);

const List = ({ list }) => {
	return list.length > 0 ? (
		<section id='result-list'>
			{list.map(({ objectID, ...item }) => {
				const ItemEnhanced = Hoc(Item);
				return (
					<React.Fragment key={objectID}>
						<ItemEnhanced item={item} />
						<Item item={item} />
					</React.Fragment>
				);

				// Hoc(Item)({
				// 	key: objectID,
				// 	item: {
				// 		...item,
				// 	},
				// });

				// return <Item key={objectID} item={item} />;
			})}
			{Hoc(ChildTest)()}
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
