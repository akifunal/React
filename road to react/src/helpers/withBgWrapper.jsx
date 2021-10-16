const withBgWrapper = (Component, displayName, bgCssClass) => {
	const WrappedComponent = props => {
		return (
			<div className={`min-h-full ${bgCssClass}`}>
				<Component {...props} />
			</div>
		);
	};

	// To correctly show component name at react developer tools
	WrappedComponent.displayName = `WithOrangeWrapper(${displayName})`;

	return WrappedComponent;
};

export default withBgWrapper;
