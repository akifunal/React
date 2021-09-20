import { string, func, node } from 'prop-types';

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
			className='p-2 ml-4 tracking-wide rounded-md shadow-md focus:outline-none focus:ring-4 focus:ring-steel-blue-default dark:bg-gray-400 dark:text-gray-100 '
			type={type}
			id={id}
			onChange={onInputChange}
			value={value}
		/>
	</section>
);

InputWithLabel.propTypes = {
	id: string.isRequired,
	value: string.isRequired,
	type: string,
	onInputChange: func.isRequired,
	children: node.isRequired,
};

export default InputWithLabel;
