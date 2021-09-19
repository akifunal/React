import styles from '@InputWithLabel/InputWithLabel.module.scss';
const InputWithLabel = ({
	id,
	value,
	type = 'text',
	onInputChange,
	children,
}) => (
	<section id={styles['input-section']}>
		<label htmlFor={id}>{children} </label>
		<input
			className={styles.input}
			type={type}
			id={id}
			onChange={onInputChange}
			value={value}
		/>
	</section>
);

export default InputWithLabel;
