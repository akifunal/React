import styles from '@InputWithLabel/InputWithLabel.module.sass';
const InputWithLabel = ({ id, label, value, type = 'text', onInputChange }) => (
	<section id='input-section'>
		<label htmlFor={id}>{label} </label>
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
