import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Favorites from '../screens/Favorites';
export default createStackNavigator({
	Favorites: {
		screen: Favorites
	}
});
