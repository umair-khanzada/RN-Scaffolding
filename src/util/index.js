import constraints from './constraints';

const navigateTo = (navigation, route) => () => {
	navigation.navigate(route);
};

const mapErrorMessage = (errors, key) => {
	if (errors && errors[key]) {
		return errors[key][0];
	}
};

export { navigateTo, mapErrorMessage, constraints };
