import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import validate from 'validate.js';
import { Text, Icon, Input, CheckBox, Button } from 'react-native-elements';
import Link from '../components/Link';
import TogglePasswordVisibility from '../components/TogglePasswordVisibility';
import { navigateTo, mapErrorMessage, constraints, API_CLIENT } from '../util';

import styles from '../styles/global';

class Login extends Component {
	state = {
		email: undefined,
		password: undefined,
		rememberMe: true,
		secureTextEntry: true,
		loading: false,
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
		const errors = validate(
			{ email: this.state.email, password: this.state.password },
			{ email: constraints.email, password: constraints.password }
		);

		if (!errors) {
			const { email, password } = this.state;
			this.setState({ loading: true, errors });
			API_CLIENT.post('auth', { email, password })
				.then((res) => {
					console.log('Data in login: ', res.data);
					/* reset form */
					this.setState({
						loading: false,
						email: undefined,
						password: undefined,
						rememberMe: true,
						secureTextEntry: true
					});
					/* closure call */
					navigateTo(this.props.navigation, 'App')();
				})
				.catch((err) => {
					console.log('Err in login: ', err);
					this.setState({ loading: false });
				});
		} else {
			this.setState({ errors });
		}
	};

	render() {
		return (
			<View style={[styles.container]}>
				<View style={[styles.flex2]}>
					<Icon type="antdesign" name="setting" iconStyle={{ color: '#000', fontSize: 200 }} />
				</View>
				<View style={{ flex: 3 }}>
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
					<Input
						label={<Text>Password</Text>}
						placeholder="Password"
						leftIcon={{ name: 'lock', type: 'antdesign', size: 28 }}
						rightIcon={
							<TogglePasswordVisibility
								visible={!this.state.secureTextEntry}
								onPressHandler={this.handleToggle('secureTextEntry')}
								disabled={!this.state.password}
							/>
						}
						errorMessage={mapErrorMessage(this.state.errors, 'password')}
						secureTextEntry={this.state.secureTextEntry}
						enablesReturnKeyAutomatically
						returnKeyType="done"
						autoCapitalize="none"
						autoComplete="password"
						value={this.state.password}
						onChangeText={this.handleChange('password')}
						// onSubmitEditing={this.handleSubmit}
					/>
					<View style={styles.flexRow}>
						<View>
							<CheckBox
								title="Remember me"
								checked={this.state.rememberMe}
								onPress={this.handleToggle('rememberMe')}
							/>
						</View>
						<Link
							text="Forgot Password!"
							onPress={navigateTo(this.props.navigation, 'ForgotPassword')}
						/>
					</View>
					<Button
						title="Login"
						onPress={this.handleSubmit}
						loading={this.state.loading}
						disabled={this.state.loading}
					/>
					<Link
						message="Don't have an account?"
						text="Register Now"
						onPress={navigateTo(this.props.navigation, 'Register')}
					/>
				</View>
			</View>
		);
	}
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
