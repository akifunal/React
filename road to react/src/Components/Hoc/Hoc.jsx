const Hoc = Component => props => {
	return (
		<div className='min-h-full bg-yellow-600'>
			<Component {...props} />
		</div>
	);
};
export default Hoc;
