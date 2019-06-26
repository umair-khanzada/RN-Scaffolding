import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import validate from 'validate.js';
import { Text, Icon, Input, Button } from 'react-native-elements';
import Link from '../components/Link';
import { constraints, navigateTo, mapErrorMessage } from '../util';
import styles from '../styles/global';

class ForgotPassword extends Component {
	state = {
		email: undefined,
		errors: {}
	};

	handleChange = (name) => (value) => {
		this.setState({
			[name]: value,
			errors: { ...this.state.errors, [name]: undefined }
		});
	};

	handleSubmit = () => {
		const errors = validate(
			{ email: this.state.email },
			{ email: constraints.email }
		);
		this.setState({ errors });
		// navigateTo(this.props.navigation, 'App')
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
						errorMessage={mapErrorMessage(this.state.errors, 'email')}
						enablesReturnKeyAutomatically
						returnKeyType="next"
						autoCapitalize="none"
						autoComplete="email"
						keyboardType="email-address"
						value={this.state.email}
						onChangeText={this.handleChange('email')}
						// onSubmitEditing={this.emailSubmitEditing}
					/>
					<Button title="Forgot Password" onPress={this.handleSubmit} />
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
