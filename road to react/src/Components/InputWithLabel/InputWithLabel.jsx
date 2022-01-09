// @ts-nocheck
import { string, func, node } from 'prop-types'
import { forwardRef, useEffect, useRef } from 'react'

import styles from './InputWithLabel.module.scss'

const InputWithLabel = forwardRef(
	({ id, isFocused, value, type = 'text', onInputChange, children }, ref) => {
		const inputRef = useRef()

		useEffect(() => {
			if (isFocused) inputRef?.current?.input?.focus()
		}, [isFocused])

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
			</section>
		)
	}
)

InputWithLabel.propTypes = {
	id: string.isRequired,
	value: string.isRequired,
	type: string,
	onInputChange: func.isRequired,
	children: node,
}

InputWithLabel.displayName = 'InputWithLabel'

export default InputWithLabel
