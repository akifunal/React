import { string, func, node } from 'prop-types';
import { useState } from 'react';

const InputWithLabel = ({
	id,
	value,
	type = 'text',
	onInputChange,
	children,
}) => {
	const [text, setText] = useState('');

	const handleChange = e => setText(e.target.value);

	return (
		<section id='search' className='p-4'>
			<label
				htmlFor={id}
				className='block mb-2 tracking-wide dark:text-gray-200'>
				{children}
			</label>
			<input
				className='p-2 ml-4 tracking-wide rounded-md shadow-md focus:outline-none focus:ring-4 focus:ring-steel-blue-default dark:bg-gray-400 dark:text-gray-100 dark:placeholder-blue-200'
				type={type}
				id={id}
				onChange={onInputChange}
				value={value}
				placeholder='Search'
			/>
			<input
				className='p-2 ml-4 tracking-wide rounded-md shadow-md focus:outline-none focus:ring-4 focus:ring-steel-blue-default dark:bg-gray-400 dark:text-gray-100 dark:placeholder-blue-200'
				type='text'
				value={text}
				onChange={handleChange}
				placeholder='Test placeholder'
			/>
		</section>
	);
};

InputWithLabel.propTypes = {
	id: string.isRequired,
	value: string.isRequired,
	type: string,
	onInputChange: func.isRequired,
	children: node.isRequired,
};

export default InputWithLabel;
