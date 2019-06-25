import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

class Profile extends Component {
	render() {
		return (
			<View>
				<Text>Profile</Text>
			</View>
		);
	}
}

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
