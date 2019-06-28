import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { ListItem, Text } from 'react-native-elements';
import RoundButton from '../components/RoundButton';
import THEME_CONFIG from '../config/themeConfig';
import settings from '../../__mock__/settings';

const style = StyleSheet.create({
	cover: {
		height: 300
	},
	changeProfileContainer: {
		flex: 6,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		marginHorizontal: 15
	},
	nameContainer: {
		flex: 1,
		opacity: 0.7,
		justifyContent: 'flex-end'
	},
	name: {
		color: '#fff',
		paddingVertical: 5,
		paddingHorizontal: 15,
		backgroundColor: THEME_CONFIG.PRIMARY_COLOR,
		fontSize: THEME_CONFIG.PRIMARY_FONT_SIZE + 4
	}
});

class Profile extends Component {
	constructor(props) {
		super(props);

		// Generate state keys according to settings list.
		const settingsState = {};
		settings.forEach((obj) => (settingsState[obj.key] = false));

		this.state = {
			...settingsState
		};
	}

	handleToggle = (name) => (value) => {
		this.setState({ [name]: value });
	};

	render() {
		return (
			<ScrollView>
				<ImageBackground
					source={require('../assets/images/profile.jpg')}
					style={{}}
				>
					<View style={style.cover}>
						<View style={style.changeProfileContainer}>
							<RoundButton />
						</View>
						<View style={style.nameContainer}>
							<Text style={[style.name]}>John Doe</Text>
						</View>
					</View>
				</ImageBackground>
				<View>
					{settings.map((item, i) => (
						<ListItem
							key={item.key}
							title={item.title}
							leftIcon={{ name: item.icon, type: item.type }}
							rightIcon={{ name: 'right', type: 'antdesign' }}
							containerStyle={[{backgroundColor: '#fff', paddingVertical: 10}]}
						/>
					))}
				</View>
			</ScrollView>
		);
	}
}

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
