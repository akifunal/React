const InputWithLabel = ({
	id,
	value,
	type = 'text',
	onInputChange,
	children,
}) => (
	<section id='search' className='p-4'>
		<label htmlFor={id} className='tracking-wide dark:text-gray-200'>
			{children}{' '}
		</label>
		<input
			className='focus:outline-none focus:ring-4 focus:ring-steel-blue-default ml-4 p-2 shadow-md rounded-md tracking-wide  dark:bg-gray-400 dark:text-gray-100 '
			type={type}
			id={id}
			onChange={onInputChange}
			value={value}
		/>
	</section>
);

export default InputWithLabel;
