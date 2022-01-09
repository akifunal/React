import { arrayOf, number, shape, string } from 'prop-types'
import { Item } from '@components/index'

const List = ({ list, onRemoveItem }) => {
	return list.length > 0 ? (
		<section id='result-list'>
			{list.map((item, index) =>
				index % 2 === 0 ? (
					<Item
						key={item.objectID}
						item={item}
						onRemoveItem={onRemoveItem}
						className='bg-yellow-600'
					/>
				) : (
					<Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
				)
			)}
		</section>
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
