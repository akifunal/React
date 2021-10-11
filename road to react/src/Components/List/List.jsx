import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import Item from '@Item/Item';
import withBgWrapper from '@helper/withBgWrapper';

const List = ({ list, onRemoveItem }) =>
	list.length > 0 ? (
		<section id='result-list'>
			{list.map((item, index) => {
				const ItemEnhanced = withBgWrapper(Item, 'ItemWithBg', 'bg-yellow-600');

				return (
					<React.Fragment key={item.objectID}>
						{index % 2 === 0 ? (
							<ItemEnhanced item={item} onRemoveItem={onRemoveItem} />
						) : (
							<Item item={item} onRemoveItem={onRemoveItem} />
						)}
					</React.Fragment>
				);

				// return <Item key={objectID} item={item} />;
			})}
		</section>
	) : null;

List.propTypes = {
	list: arrayOf(
		shape({
			author: string.isRequired,
			objectID: string.isRequired,
			title: string.isRequired,
			url: string.isRequired,
			num_comments: number.isRequired,
			points: number.isRequired,
		}).isRequired
	).isRequired,
};

export default List;
