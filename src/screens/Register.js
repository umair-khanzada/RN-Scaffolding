import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { View, ScrollView } from 'react-native';
import { Text, Icon, Input, Button } from 'react-native-elements';
import Link from '../components/Link';
import { navigateTo, mapErrorMessage, constraints, API_CLIENT } from '../util';
import styles from '../styles/global';
import TogglePasswordVisibility from '../components/TogglePasswordVisibility';

class Register extends Component {
	state = {
		firstName: undefined,
		lastName: undefined,
		email: undefined,
		password: undefined,
		confirmPassword: undefined,
		passwordSecureTextEntry: true,
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
			firstName,
			lastName,
			email,
			password,
			confirmPassword
		} = this.state;

		const errors = validate(
			{ firstName, lastName, email, password, confirmPassword },
			constraints
		);

		if (!errors) {
			this.setState({ loading: true, errors });
			API_CLIENT.post('users', { firstName, lastName, email, password })
				.then((res) => {
					console.log('Data in register: ', res.data);
					/* reset form */
					this.setState({
						loading: false,
						firstName: undefined,
						lastName: undefined,
						email: undefined,
						password: undefined,
						confirmPassword: undefined,
						passwordSecureTextEntry: true,
						confirmPasswordSecureTextEntry: true
					});
					navigateTo(this.props.navigation, 'App')();
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
					<View>
						<Icon type="antdesign" name="setting" iconStyle={{ color: '#000', fontSize: 200 }} />
					</View>
					<View>
						<Input
							autoFocus
							label={<Text>First Name</Text>}
							placeholder="First Name"
							leftIcon={{ name: 'user' }}
							enablesReturnKeyAutomatically
							returnKeyType="next"
							errorMessage={mapErrorMessage(this.state.errors, 'firstName')}
							value={this.state.firstName}
							onChangeText={this.handleChange('firstName')}
							// onSubmitEditing={() => this.changeFocus(this.lastNameInputRef, 100)}
							// blurOnSubmit={false}
						/>
						<Input
							label={<Text>Last Name</Text>}
							placeholder="Last Name"
							leftIcon={{ name: 'user' }}
							enablesReturnKeyAutomatically
							returnKeyType="next"
							errorMessage={mapErrorMessage(this.state.errors, 'lastName')}
							value={this.state.lastName}
							onChangeText={this.handleChange('lastName')}
							// onSubmitEditing={() => this.changeFocus(this.lastNameInputRef, 100)}
							// blurOnSubmit={false}
						/>
						<Input
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
						<Input
							label={<Text>Password</Text>}
							placeholder="Password"
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
							errorMessage={mapErrorMessage(
								this.state.errors,
								'confirmPassword'
							)}
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
							title="Register"
							onPress={this.handleSubmit}
							loading={this.state.loading}
							disabled={this.state.loading}
						/>
						<Link
							message="Already have an account?"
							text="Login Here"
							onPress={navigateTo(this.props.navigation, 'Login')}
						/>
					</View>
				</View>
			</ScrollView>
		);
	}
}

Register.propTypes = {};

Register.defaultProps = {};

export default Register;
