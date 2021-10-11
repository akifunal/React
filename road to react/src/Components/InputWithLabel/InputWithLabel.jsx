import { string, func, node } from 'prop-types';
import { forwardRef, useEffect, useState, useRef } from 'react';

import styles from './InputWithLabel.module.scss';

const InputWithLabel = forwardRef(
	({ id, isFocused, value, type = 'text', onInputChange, children }, ref) => {
		const [text, setText] = useState('');
		const inputRef = useRef();

		useEffect(() => {
			if (isFocused && inputRef.current) inputRef.current.focus();
		}, [isFocused]);

		const handleChange = e => setText(e.target.value);

		return (
			<section id='search' className='p-4'>
				<label
					ref={ref}
					htmlFor={id}
					className='block mb-2 tracking-wide dark:text-gray-200'>
					{children}
				</label>
				<input
					type={type}
					className={styles['input-text']}
					id={id}
					value={value}
					placeholder='Search'
					onChange={onInputChange}
					ref={inputRef}
					//autoFocus={isFocused}
				/>
				<input
					type={type}
					className={styles['input-text']}
					value={text}
					placeholder='Test placeholder'
					onChange={handleChange}
					//autoFocus={isFocused}
				/>
			</section>
		);
	}
);

InputWithLabel.propTypes = {
	id: string.isRequired,
	value: string.isRequired,
	type: string,
	onInputChange: func.isRequired,
	children: node,
};

InputWithLabel.displayName = 'InputWithLabel';

export default InputWithLabel;
