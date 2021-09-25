const withOrangeWrapper = (Component, name) => {
	const withHocComponent = props => {
		return (
			<div className='min-h-full bg-yellow-600'>
				<Component {...props} />
			</div>
		);
	};

	// To show component name on react developer tools
	withHocComponent.displayName = `withOrangeWrapper(${name})`;

	return withHocComponent;
};

withOrangeWrapper.displayName = 'HocTest!!';
export default withOrangeWrapper;
