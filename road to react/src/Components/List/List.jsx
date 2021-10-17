import { Fragment, memo } from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import Item from '@Item/Item';
import withBgWrapper from '@helper/withBgWrapper';

const List = ({ list, onRemoveItem }) =>
	list.length > 0 ? (
		<section id='result-list'>
			{list.map((item, index) => {
				const ItemEnhanced = withBgWrapper(Item, 'ItemWithBg', 'bg-yellow-600');

				return (
					<Fragment key={item.objectID}>
						{index % 2 === 0 ? (
							<ItemEnhanced item={item} onRemoveItem={onRemoveItem} />
						) : (
							<Item item={item} onRemoveItem={onRemoveItem} />
						)}
					</Fragment>
				);

				// return <Item key={objectID} item={item} />;
			})}
		</section>
	) : null;

List.propTypes = {
	list: arrayOf(
		shape({
			author: string,
			objectID: string,
			title: string,
			url: string,
			num_comments: number,
			points: number,
		}).isRequired
	).isRequired,
};

export default memo(List);
