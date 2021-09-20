import PropTypes from 'prop-types';
import { memo } from 'react';
const Item = ({ item }) => {
	return (
		<div className='flex justify-start gap-3 p-4 dark:text-gray-200'>
			<span>
				<a href={item.url}>{item.title}</a>
			</span>
			<span>{item.author}</span>
			<span>{item.num_comments}</span>
			<span>{item.points}</span>
			<a className='hover:bg-steel-blue-default' href={item.url}>
				{item.url}
			</a>
		</div>
	);
};

Item.propTypes = {
	item: PropTypes.shape({
		title: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired,
		num_comments: PropTypes.number.isRequired,
		points: PropTypes.number.isRequired,
	}).isRequired,
};

export default memo(Item);
