import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text, Icon, Input, Button } from 'react-native-elements';
import Link from '../components/Link';
import { navigateTo } from '../util';
import styles from '../styles/global';

class ForgotPassword extends Component {
	state = {
		email: ''
	};

	handleChange = (name) => (value) => {
		this.setState({ [name]: value });
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={[styles.flex1]}>
					<Icon
						type="antdesign"
						name="setting"
						iconStyle={{ color: '#000', fontSize: 200 }}
					/>
				</View>
				<View style={[styles.flex1]}>
					<Input
						autoFocus
						label={<Text>Email</Text>}
						placeholder="Email"
						leftIcon={{ name: 'envelope-o', type: 'font-awesome' }}
						errorMessage="Email is required!"
						enablesReturnKeyAutomatically
						returnKeyType="next"
						autoCapitalize="none"
						autoComplete="email"
						keyboardType="email-address"
						value={this.state.email}
						onChangeText={this.handleChange('email')}
						// onSubmitEditing={this.emailSubmitEditing}
					/>
					<Button title="Forgot Password" />
					<Link
						message="Back to"
						text="Login"
						onPress={navigateTo(this.props.navigation, 'Login')}
					/>
				</View>
			</View>
		);
	}
}

ForgotPassword.propTypes = {};

ForgotPassword.defaultProps = {};

export default ForgotPassword;
