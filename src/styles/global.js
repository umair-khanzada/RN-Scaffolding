import React from 'react';
import { StyleSheet } from 'react-native';

//common styles.
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15
	},
	flex1: {
		flex: 1
	},
	flex2: {
		flex: 2
	},
	flexRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
});

export default styles;
