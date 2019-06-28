import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	buttonStyle: {
		borderRadius: 50,
		width: 70,
		height: 70
	}
});

const RoundButton = (props) => (
	<Button
		buttonStyle={props.buttonStyle}
		icon={props.icon}
		iconContainerStyle={props.iconContainerStyle}
		onPress={props.onPress}
	/>
);

RoundButton.propTypes = {
	icon: PropTypes.object,
	iconContainerStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.arrayOf(PropTypes.object)
	]),
	buttonStyle: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.arrayOf(PropTypes.object)
	]),
	onPress: PropTypes.func
};

RoundButton.defaultProps = {
	buttonStyle: [style.buttonStyle],
	icon: { type: 'antdesign', name: 'camera', size: 25 },
	iconContainerStyle: {},
	onPress: () => {}
};

export default RoundButton;
