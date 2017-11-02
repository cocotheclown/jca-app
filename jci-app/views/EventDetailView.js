import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BookTicket from './BookTicket';

export default class EventDetailView extends Component {
  static navigationOptions = {
        title: 'Event Detail',
      };
      render() {
        const { navigate } = this.props.navigation;
        return (
          <View>
            <Text>Event Detail</Text>
         <Button
          onPress={() => navigate('BookTicket')}
          title="Book Ticket"
        />
          </View>
        );
      }
}
