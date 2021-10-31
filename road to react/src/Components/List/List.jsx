import { useMemo } from 'react'
import { arrayOf, number, shape, string } from 'prop-types'
import withBgWrapper from '@helper/withBgWrapper'
// import Item from '@Item/Item';
import { Item } from '@components/index'

const List = ({ list, onRemoveItem }) => {
	const memoizedList = useMemo(
		() =>
			list.map((item, index) => {
				const ItemEnhanced = withBgWrapper(Item, 'ItemWithBg', 'bg-yellow-600')

				console.log('list running')

				if (index % 2 === 0)
					return (
						<ItemEnhanced
							key={item.objectID}
							item={item}
							onRemoveItem={onRemoveItem}
						/>
					)
				else
					return (
						<Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
					)

				// return (
				// 	<Item key={item.objectID} {...item} onRemoveItem={onRemoveItem} />
				// );
			}),
		[list, onRemoveItem]
	)

	return list.length > 0 ? (
		<section id='result-list'>{memoizedList}</section>
	) : null
}

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
}

export default List
