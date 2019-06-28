import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { navigateTo } from '../util';
import styles from '../styles/global';
import Link from '../components/Link';

class Home extends Component {
	render() {
		return (
			<View style={[styles.container]}>
				<View style={[styles.flex1]}>
					<Icon type="antdesign" name="setting" iconStyle={{ color: '#000', fontSize: 200 }} />
				</View>
				<View style={[styles.flex1]}>
					<Button
						title="Login With Facebook"
						buttonStyle={[{backgroundColor: '#3b5897'}]}
						icon={{ type: 'font-awesome', name: 'facebook-official' }}
					/>
					<Button
						title="Login With Google"
						buttonStyle={[{backgroundColor: '#c1382c'}]}
						icon={{type: 'antdesign', name: 'googleplus'}}
					/>
					<Button
						title="Login With Email"
						icon={{name: 'email', type: 'entypo', size: 35}}
						onPress={navigateTo(this.props.navigation, 'Login')}
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

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
