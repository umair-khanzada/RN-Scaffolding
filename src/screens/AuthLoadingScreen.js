import React, { Component } from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native';

export default class AuthLoadingScreen extends Component {
	constructor(props) {
		super(props);
		this.bootstrapAsync();
	}

	// Fetch the token from storage then navigate to our appropriate place
	bootstrapAsync = async () => {
		const userToken = await AsyncStorage.getItem('userToken');

		/*
      This will switch to the App screen or Auth screen and this loading
      screen will be unmounted and thrown away.
    */
		this.props.navigation.navigate(userToken ? 'App' : 'Auth');
	};

	render() {
		return (
			<View>
				<ActivityIndicator />
				<StatusBar barStyle="default" />
			</View>
		);
	}
}
