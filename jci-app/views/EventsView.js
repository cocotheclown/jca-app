import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import EventDetailView from './EventDetailView';

export default class EventsView extends Component {
  static navigationOptions = {
    title: 'Events',
  }
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View>
          <Text>Event List</Text>
          <Button
          onPress={() => navigate('EventDetailView')}
          title="Events"
        />
        </View>
      )
    }
}
