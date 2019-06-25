const navigateTo = (navigation, route) => () => {
	navigation.navigate(route);
};

export { navigateTo };
