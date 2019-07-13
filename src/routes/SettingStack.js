import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Settings from '../screens/Settings';
import ChangePassword from '../screens/ChangePassword';

export default createStackNavigator({
	Setting: {
		screen: Settings
	},
	ChangePassword: {
		screen: ChangePassword
	}
});
