import React from 'react';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation';
import ProfileStack from './ProfileStack';
import ListStack from './ListStack';
import FavoriteStack from './FavoriteStack';
import THEME_CONFIG from '../config/themeConfig';

export default createBottomTabNavigator(
	{
		List: {
			screen: ListStack,
			navigationOptions: {
				tabBarIcon: (props) => (
					<Icon
						name="bars"
						type="antdesign"
						iconStyle={{ color: props.tintColor }}
					/>
				)
			}
		},
		Favorite: {
			screen: FavoriteStack,
			navigationOptions: {
				tabBarIcon: (props) => (
					<Icon
						name="favorite"
						type="material"
						iconStyle={{ color: props.tintColor }}
					/>
				)
			}
		},
		Profile: {
			screen: ProfileStack,
			navigationOptions: {
				tabBarIcon: (props) => (
					<Icon
						name="md-settings"
						type="ionicon"
						iconStyle={{ color: props.tintColor }}
					/>
				)
			}
		}
	},
	{
		tabBarOptions: {
			showLabel: false,
			activeTintColor: '#fff',
			activeBackgroundColor: THEME_CONFIG.PRIMARY_COLOR,
			inactiveTintColor: THEME_CONFIG.PRIMARY_COLOR
		}
	}
);
