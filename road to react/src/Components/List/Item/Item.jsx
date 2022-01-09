import { func, number, shape, string } from 'prop-types'
import { memo } from 'react'

const Item = ({ item, onRemoveItem, className }) => {
	const handleRemoveItem = () => {
		onRemoveItem(item)
	}

	return (
		<div
			className={`flex items-center justify-start gap-3 p-4 dark:text-gray-200 ${className}`}>
			<span>
				<a className='hover:bg-steel-blue-default' href={item.url}>
					{item.title}
				</a>
			</span>
			<cite>{item.author}</cite>
			<em>{item.num_comments}</em>
			<b>{item.points}</b>
			<span>
				<button
					className='px-2 py-1 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-400'
					type='button'
					onClick={handleRemoveItem}>
					Dismiss
				</button>
			</span>
		</div>
	)
}

Item.propTypes = {
	item: shape({
		author: string,
		num_comments: number,
		objectID: string,
		points: number,
		title: string,
		url: string,
	}).isRequired,
	onRemoveItem: func.isRequired,
	className: string,
}

Item.defaultProps = {
	className: '',
}

// const MemoItem = memo(Item, (prevProps, nextProps) => {
// 	if (prevProps.item.objectID === nextProps.item.objectID) {
// 		return true;
// 	}
// 	return false;
// });

export default memo(Item)
