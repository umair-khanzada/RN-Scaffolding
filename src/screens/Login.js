import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text, Icon, Input, CheckBox, Button } from 'react-native-elements';
import Link from '../components/Link';
import TogglePasswordVisibility from '../components/TogglePasswordVisibility';
import { navigateTo } from '../util';
import styles from '../styles/global';

class Login extends Component {
	state = {
		email: '',
		password: '',
		rememberMe: true,
		secureTextEntry: true,
		loading: false
	};

	handleChange = (name) => (value) => {
		this.setState({ [name]: value });
	};

	handleToggle = (name) => () => {
		this.setState({ [name]: !this.state[name] });
	};

	render() {
		return (
			<View style={[styles.container]}>
				<View style={[styles.flex2]}>
					<Icon name="setting" iconStyle={{ color: '#000', fontSize: 200 }} />
				</View>
				<View style={{ flex: 3 }}>
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
					<Input
						label={<Text>Password</Text>}
						placeholder="Password"
						leftIcon={{ name: 'lock', type: 'antdesign' }}
						rightIcon={
							<TogglePasswordVisibility
								visible={!this.state.secureTextEntry}
								onPressHandler={this.handleToggle('secureTextEntry')}
								disabled={!this.state.password}
							/>
						}
						errorMessage="Password is required!"
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
						onPress={navigateTo(this.props.navigation, 'App')}
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
