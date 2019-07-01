import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import THEME_CONFIG from '../config/themeConfig';

// TODO: replace data from server/api.
import list from '../../__mock__/list';
const filteredList = list.filter((obj) => obj.online);

class List extends Component {
	state = { filteredList: [...filteredList], refresh: false };

	keyExtractor = ({ item, i }) => item.id;

	reloadData = () => {
		this.setState({ refresh: true });
		setTimeout(() => {
			this.setState({
				filteredList: [...filteredList],
				refresh: false
			});
		}, 2000);
	};

	handleToggle = (obj, i) => () => {
		const { filteredList } = this.state;
		this.setState({
			filteredList: [...filteredList.slice(0, i), ...filteredList.slice(i + 1)]
		});
	};

	renderItem = ({ item, index }) => (
		<ListItem
			title={`${item.firstName} ${item.lastName}`}
			subtitle={item.title}
			leftAvatar={{ source: { uri: item.image } }}
			rightIcon={{
				name: `${item.online ? 'favorite' : 'favorite-border'}`,
				type: 'material',
				size: 20,
				onPress: this.handleToggle(item, index)
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
				data={this.state.filteredList}
				renderItem={this.renderItem}
			/>
		);
	}
}

List.propTypes = {};

List.defaultProps = {};

export default List;
