import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import THEME_CONFIG from "../config/themeConfig";

const style = StyleSheet.create({
	linkContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end'
	},
	link: {
		color: THEME_CONFIG.PRIMARY_COLOR,
		marginLeft: 5,
		marginBottom: THEME_CONFIG.DEFAULT_M_B
	}
});

const Link = (props) => (
	<View style={style.linkContainer}>
		<Text>{props.message}</Text>
		<TouchableOpacity onPress={props.onPress}>
			<Text style={[style.link]}>{props.text}</Text>
		</TouchableOpacity>
	</View>
);

Link.propTypes = {
	message: PropTypes.string,
	text: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired
};

Link.defaultProps = {};

export default Link;