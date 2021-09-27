import { shape, string, number } from 'prop-types';
import { memo } from 'react';
const Item = ({ item, onRemoveItem }) => {
	const handleRemoveItem = () => {
		onRemoveItem(item);
	};

	return (
		<div className='flex items-center justify-start gap-3 p-4 dark:text-gray-200'>
			<span>
				<a className='hover:bg-steel-blue-default' href={item.url}>
					{item.title}
				</a>
			</span>
			<span>{item.author}</span>
			<span>{item.num_comments}</span>
			<span>{item.points}</span>
			<span>
				<button
					className='px-2 py-1 font-semibold text-gray-800 bg-white border border-gray-400 rounded shadow hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-400'
					type='button'
					onClick={handleRemoveItem}>
					Dismiss
				</button>
			</span>
		</div>
	);
};

Item.propTypes = {
	item: shape({
		author: string.isRequired,
		num_comments: number.isRequired,
		objectID: number.isRequired,
		points: number.isRequired,
		title: string.isRequired,
		url: string.isRequired,
	}).isRequired,
};

export default memo(Item);
