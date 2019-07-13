import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { ListItem, Text } from 'react-native-elements';
import RoundButton from '../components/RoundButton';
import THEME_CONFIG from '../config/themeConfig';
import settings from '../../__mock__/settings';
import { navigateTo } from '../util';

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
		fontSize: THEME_CONFIG.PRIMARY_FONT_SIZE
	},
	listContainer: {
		marginVertical: 50
	}
});

class Settings extends Component {
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
				<View style={{ backgroundColor: THEME_CONFIG.BG_COLOR }}>
					<View style={style.listContainer}>
						{
							settings.map(({onPress, ...item}, i) => (
								<ListItem
									rightIcon={{ name: 'right', type: 'antdesign', size: 15 }}
									containerStyle={[{ paddingVertical: 5 }]}
									onPress={onPress(this.props.navigation)}
									{...item}
								/>
							))
						}
					</View>
				</View>
			</ScrollView>
		);
	}
}

Settings.propTypes = {};

Settings.defaultProps = {};

export default Settings;
