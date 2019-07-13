import {
	registerConstraints as constraints,
	changePasswordConstraints
} from './constraints';
import { API_CLIENT } from './apiClient';

const navigateTo = (navigation, route) => () => {
	navigation.navigate(route);
};

const mapErrorMessage = (errors, key) => {
	if (errors && errors[key]) {
		return errors[key][0];
	}
};

export {
	navigateTo,
	mapErrorMessage,
	constraints,
	changePasswordConstraints,
	API_CLIENT
};
