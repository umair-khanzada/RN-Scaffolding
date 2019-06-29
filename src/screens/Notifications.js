import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

// TODO: Fetch from DB or local json/js file.
const list = [
	{
		title: 'Notification',
		icon: 'notification',
		key: 'notification'
	},
	{
		title: 'Customer Service',
		icon: 'customerservice',
		key: 'customer_service'
	},
	{
		title: 'Filters',
		icon: 'filter',
		key: 'filters'
	},
	{
		title: 'Call Setting',
		icon: 'mobile1',
		key: 'call_setting'
	},
	{
		title: 'Location',
		icon: 'enviromento',
		key: 'location'
	},
	{
		title: 'Favorite',
		icon: 'hearto',
		key: 'Favorite'
	},
	{
		title: 'Clock',
		icon: 'clockcircleo',
		key: 'clock'
	}
];

class Notifications extends Component {
	constructor(props) {
		super(props);

		// Generate state keys according to settings list.
		const settingsState = {};
		list.forEach((obj) => (settingsState[obj.key] = false));

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
				{list.map((item, i) => (
					<ListItem
						key={item.key}
						title={item.title}
						leftIcon={{ name: item.icon }}
						switch={{
							value: this.state[item.key],
							onValueChange: this.handleToggle(item.key)
						}}
					/>
				))}
			</ScrollView>
		);
	}
}

Notifications.propTypes = {};

Notifications.defaultProps = {};

export default Notifications;
