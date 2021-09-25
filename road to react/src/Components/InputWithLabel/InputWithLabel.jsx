import { string, func, node } from 'prop-types';
import { useState } from 'react';

import styles from './InputWithLabel.module.scss';

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
				className={styles['input-text']}
				type={type}
				id={id}
				onChange={onInputChange}
				value={value}
				placeholder='Search'
			/>
			<input
				className={styles['input-text']}
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
	children: node,
};

export default InputWithLabel;
