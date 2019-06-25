import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';


const list = [
  {
    title: 'Notification',
    icon: 'notification'
  },
  {
    title: 'Customer Service',
    icon: 'customerservice'
  },
  {
    title: 'Filter',
    icon: 'filter'
  },
  {
    title: 'Call Setting',
    icon: 'mobile1'
  },
  {
    title: 'Location',
    icon: 'enviromento'
  },
  {
    title: 'Favorite',
    icon: 'hearto'
  },
  {
    title: 'Clock',
    icon: 'clockcircleo'
  }
];

class Settings extends Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  render () {
    return (
      <ScrollView>
        {
          list.map((item, i) => (
            <ListItem
              key={i}
              switch
              bottomDivider
              title={item.title}
              leftIcon={{name: item.icon}}
            />
          ))
        }
      </ScrollView>
    )
  }
}

Settings.propTypes = {};

Settings.defaultProps = {};


export default Settings;