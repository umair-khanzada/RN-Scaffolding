import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import THEME_CONFIG from '../config/themeConfig';

// TODO: replace data from server/api.
import list from '../../__mock__/list';

class List extends Component {
	state = { refresh: false, list: [...list] };

	keyExtractor = ({ item, i }) => item.id;

	reloadData = () => {
		this.setState({ refresh: true });
		setTimeout(() => {
			this.setState({
				list: [...list],
				refresh: false
			});
		}, 2000);
	};

	handleToggle = (obj) => () => {
		//Note: Do not mutate directly.
		//TODO: this is temporary for toggling.
		obj.online = !obj.online;
		this.setState({});
	};

	renderItem = ({ item }) => (
		<ListItem
			title={`${item.firstName} ${item.lastName}`}
			subtitle={item.title}
			leftAvatar={{ source: { uri: item.image } }}
			rightIcon={{
				name: `${item.online ? 'favorite' : 'favorite-border'}`,
				type: 'material',
				size: 20,
				onPress: this.handleToggle(item)
			}}
			containerStyle={[{ paddingVertical: 5, paddingLeft: 0 }]}
		/>
	);

	render() {
		return (
			<FlatList
				style={{ backgroundColor: THEME_CONFIG.BG_COLOR }}
				// keyExtractor={this.keyExtractor}
				refreshing={this.state.refresh}
				onRefresh={this.reloadData}
				data={this.state.list}
				renderItem={this.renderItem}
			/>
		);
	}
}

List.propTypes = {};

List.defaultProps = {};

export default List;
