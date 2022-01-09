const withBgWrapper = (Component, displayName) => {
	const WrappedComponent = props => {
		return (
			<div className={`min-h-full ${props.className}`}>
				<Component {...props} />
			</div>
		)
	}

	// To correctly show component name in React DevTools
	WrappedComponent.displayName = `WithOrangeWrapper(${displayName})`

	return WrappedComponent
}

export default withBgWrapper
