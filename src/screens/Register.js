import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import { Text, Icon, Input, Button } from 'react-native-elements';
import Link from '../components/Link';
import { navigateTo } from '../util';
import styles from '../styles/global';
import TogglePasswordVisibility from '../components/TogglePasswordVisibility';

class Register extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
		passwordSecureTextEntry: true,
		confirmPasswordSecureTextEntry: true
	};

	handleChange = (name) => (value) => {
		this.setState({ [name]: value });
	};

	handleToggle = (name) => () => {
		this.setState({ [name]: !this.state[name] });
	};

	render() {
		return (
			<ScrollView style={styles.container}>
				<View>
					<View>
						<Icon name="setting" iconStyle={{ color: '#000', fontSize: 200 }} />
					</View>
					<View>
						<Input
							autoFocus
							label={<Text>First Name</Text>}
							placeholder="First Name"
							leftIcon={{ name: 'user' }}
							enablesReturnKeyAutomatically
							returnKeyType="next"
							errorMessage="First name is required"
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
							errorMessage="Last name is required"
							value={this.state.lastName}
							onChangeText={this.handleChange('lastName')}
							// onSubmitEditing={() => this.changeFocus(this.lastNameInputRef, 100)}
							// blurOnSubmit={false}
						/>
						<Input
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
						<Input
							label={<Text>Password</Text>}
							placeholder="Password"
							leftIcon={{ name: 'lock', type: 'antdesign' }}
							rightIcon={
								<TogglePasswordVisibility
									visible={!this.state.passwordSecureTextEntry}
									onPressHandler={this.handleToggle('passwordSecureTextEntry')}
									disabled={!this.state.password}
								/>
							}
							errorMessage="Password is required!"
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
							leftIcon={{ name: 'lock' }}
							rightIcon={
								<TogglePasswordVisibility
									visible={!this.state.confirmPasswordSecureTextEntry}
									onPressHandler={this.handleToggle(
										'confirmPasswordSecureTextEntry'
									)}
									disabled={!this.state.confirmPassword}
								/>
							}
							errorMessage="Confirm password is required!"
							secureTextEntry={this.state.confirmPasswordSecureTextEntry}
							enablesReturnKeyAutomatically
							returnKeyType="done"
							autoCapitalize="none"
							autoComplete="password"
							value={this.state.confirmPassword}
							onChangeText={this.handleChange('confirmPassword')}
							// onSubmitEditing={this.handleSubmit}
						/>
						<Button title="Register" />
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
