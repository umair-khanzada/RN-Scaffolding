import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import validate from 'validate.js';
import { Text, Icon, Input, Button } from 'react-native-elements';
import Link from '../components/Link';
import { changePasswordConstraints, navigateTo, mapErrorMessage, API_CLIENT } from '../util';
import styles from '../styles/global';
import TogglePasswordVisibility from "../components/TogglePasswordVisibility";

class ChangePassword extends Component {
	state = {
		password: undefined,
		newPassword: undefined,
		confirmPassword: undefined,
		passwordSecureTextEntry: true,
		newPasswordSecureTextEntry: true,
		confirmPasswordSecureTextEntry: true,
		errors: {}
	};

	handleChange = (name) => (value) => {
		this.setState({
			[name]: value,
			errors: { ...this.state.errors, [name]: undefined }
		});
	};

	handleToggle = (name) => () => {
		this.setState({ [name]: !this.state[name] });
	};

	handleSubmit = () => {
		const {
			password,
			newPassword,
			confirmPassword
		} = this.state;

		const errors = validate(
			{ password, newPassword, confirmPassword },
			changePasswordConstraints
		);

		if (!errors) {
			this.setState({ loading: true, errors });
			API_CLIENT.post('forgotpassword', { password, newPassword })
				.then((res) => {
					console.log('Data in forgot password: ', res.data);
					/* reset form */
					this.setState({
						password: undefined,
						newPassword: undefined,
						confirmPassword: undefined,
						passwordSecureTextEntry: true,
						newPasswordSecureTextEntry: true,
						confirmPasswordSecureTextEntry: true,
					});
					navigateTo(this.props.navigation, 'Setting')();
				})
				.catch((err) => {
					console.log('Err in register: ', err);
					this.setState({ loading: false });
				});
		} else {
			this.setState({ errors });
		}
	};

	render() {
		return (
			<ScrollView style={styles.container}>
				<View>
					<Icon
						type="antdesign"
						name="setting"
						iconStyle={{ color: '#000', fontSize: 200 }}
					/>
				</View>
				<View style={[styles.flex1]}>
					<Input
						label={<Text>Old Password</Text>}
						placeholder="Old Password"
						leftIcon={{ name: 'lock', type: 'antdesign', size: 28 }}
						rightIcon={
							<TogglePasswordVisibility
								visible={!this.state.passwordSecureTextEntry}
								onPressHandler={this.handleToggle('passwordSecureTextEntry')}
								disabled={!this.state.password}
							/>
						}
						errorMessage={mapErrorMessage(this.state.errors, 'password')}
						secureTextEntry={this.state.passwordSecureTextEntry}
						enablesReturnKeyAutomatically
						returnKeyType="done"
						autoCapitalize="none"
						autoComplete="password"
						value={this.state.password}
						onChangeText={this.handleChange('password')}
						// onSubmitEditing={this.handleSubmit}
					/>
					<Input
						label={<Text>New Password</Text>}
						placeholder="New Password"
						leftIcon={{ name: 'lock', type: 'antdesign', size: 28 }}
						rightIcon={
							<TogglePasswordVisibility
								visible={!this.state.newPasswordSecureTextEntry}
								onPressHandler={this.handleToggle('newPasswordSecureTextEntry')}
								disabled={!this.state.newPassword}
							/>
						}
						errorMessage={mapErrorMessage(this.state.errors, 'newPassword')}
						secureTextEntry={this.state.newPasswordSecureTextEntry}
						enablesReturnKeyAutomatically
						returnKeyType="done"
						autoCapitalize="none"
						autoComplete="password"
						value={this.state.newPassword}
						onChangeText={this.handleChange('newPassword')}
						// onSubmitEditing={this.handleSubmit}
					/>
					<Input
						label={<Text>Confirm Password</Text>}
						placeholder="Confirm Password"
						leftIcon={{ name: 'lock', type: 'antdesign', size: 28 }}
						rightIcon={
							<TogglePasswordVisibility
								visible={!this.state.confirmPasswordSecureTextEntry}
								onPressHandler={this.handleToggle(
									'confirmPasswordSecureTextEntry'
								)}
								disabled={!this.state.confirmPassword}
							/>
						}
						errorMessage={mapErrorMessage(this.state.errors, 'confirmPassword')}
						secureTextEntry={this.state.confirmPasswordSecureTextEntry}
						enablesReturnKeyAutomatically
						returnKeyType="done"
						autoCapitalize="none"
						autoComplete="password"
						value={this.state.confirmPassword}
						onChangeText={this.handleChange('confirmPassword')}
						// onSubmitEditing={this.handleSubmit}
					/>
					<Button
						title="Update Password"
						onPress={this.handleSubmit}
						loading={this.state.loading}
						disabled={this.state.loading}
					/>
					<Link
						message="Back to"
						text="Settings"
						onPress={navigateTo(this.props.navigation, 'Setting')}
					/>
				</View>
			</ScrollView>
		);
	}
}

ChangePassword.propTypes = {};

ChangePassword.defaultProps = {};

export default ChangePassword;
