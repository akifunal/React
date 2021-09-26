const withOrangeWrapper = (Component, name) => {
	const WrappedComponent = props => {
		return (
			<div className='min-h-full bg-yellow-600'>
				<Component {...props} />
			</div>
		);
	};

	// To show component name on react developer tools
	WrappedComponent.displayName = `WithOrangeWrapper(${name})`;

	return WrappedComponent;
};

export default withOrangeWrapper;
