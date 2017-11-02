import React, { Component } from 'react';
import { StyleSheet, AppRegistry, ScrollView, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BookTicket from './BookTicket';

import eventsData from '../api/EventsData';
export default class EventDetailView extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.event.name
  });
  
  constructor() {
    super()
    this.state = {
      event: null
    };
  }
  
  // async componentDidMount() {
    // let event = await eventsData.getEvent(this.props.navigation.state.params.key);
    // this.setState({event});
  // }
  
  render() {
    const { navigate } = this.props.navigation,
      event = this.props.navigation.state.params.event;

    if (event === null) {
      return (<View></View>);
    } else {
      return (
        <ScrollView>
        <Text>{event.description}</Text>
        <Button
        onPress={() => navigate('BookTicket', {event: event})}
        title="Book Ticket"
        />
        </ScrollView>
      );
    }
  }
}
