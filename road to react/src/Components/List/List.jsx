import { memo, useMemo } from 'react'
import { arrayOf, number, shape, string } from 'prop-types'
import withBgWrapper from '@helper/withBgWrapper'
import { Item } from '@components/index'

const List = ({ list, onRemoveItem }) => {
	const memoizedList = useMemo(() => {
		console.log('useMemo:List')
		return list.map((item, index) => {
			// const ItemEnhanced = withBgWrapper(Item, 'ItemWithBg')

			if (index % 2 === 0)
				return (
					<Item
						key={item.objectID}
						item={item}
						onRemoveItem={onRemoveItem}
						className='bg-yellow-600'
					/>
				)
			else
				return (
					<Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
				)
		})
	}, [list, onRemoveItem])

	console.log('B:List')

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

export default memo(List)
