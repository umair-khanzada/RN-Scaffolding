import React from 'react';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation';
import ProfileStack from './ProfileStack';
import SettingsStack from './SettingsStack';
import THEME_CONFIG from '../config/themeConfig';

export default createBottomTabNavigator(
	{
		Profile: {
			screen: ProfileStack,
			navigationOptions: {
				tabBarIcon: (props) => (
					<Icon name="user" iconStyle={{ color: props.tintColor }} />
				)
			}
		},
		Settings: {
			screen: SettingsStack,
			navigationOptions: {
				tabBarIcon: (props) => (
					<Icon name="setting" iconStyle={{ color: props.tintColor }} />
				)
			}
		}
	},
	{
		tabBarOptions: {
			showLabel: false,
			activeTintColor: THEME_CONFIG.PRIMARY_COLOR,
			style: { backgroundColor: THEME_CONFIG.PRIMARY_COLOR },
			//TODO:dynamic according to theme.
			inactiveTintColor: '#fff',
			activeBackgroundColor: '#fff'
		}
	}
);
