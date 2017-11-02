import React, { Component } from 'react';
import { StyleSheet, AppRegistry, FlatList, Text, View, Button } from 'react-native';
import { List, ListItem } from "react-native-elements";
import { StackNavigator } from 'react-navigation';
import EventDetailView from './EventDetailView';

import eventsData from '../api/EventsData';

export default class EventsView extends Component {
  static navigationOptions = {
    title: 'Events',
  }

  constructor() {
    super();
    this.state = {
      events: null
    };
  }

  async componentDidMount() {
    let events = await eventsData.getAll();
    this.setState({events});
  }

  _keyExtractor(item) {
    return item.key;
  }

  _renderItem({item}) {
    return (
      <ListItem
        key={item.key}
        title={item.name}
        onPress={navigate('EventDetailView')}
      />
    );
  }

  render() {
    const { navigate } = this.props.navigation;

    if (this.state.events === null) {
      return (
        <View>


          <Text>Event List</Text>
          <Button
          onPress={() => navigate('EventDetailView')}
          title="Events"

        />

        </View>
      )
    } else {
      return (
        <List>
          <FlatList
            data={this.state.events}
            renderItem={({item}) =>
              <ListItem
                key={item.key}
                title={item.name}
                onPress={() => navigate('EventDetailView', {key: item.key})}
              />
            }
          />
        </List>
      );
    }
  }
}
