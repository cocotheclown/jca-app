import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class EventDetailView extends Component {
  static navigationOptions = {
        title: 'Events',
      };
      render() {
        return (
          <View>
            <Text>View Events</Text>
          </View>
        );
      }
}
