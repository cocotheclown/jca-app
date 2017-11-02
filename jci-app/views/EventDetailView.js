import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BookTicket from './BookTicket';

import eventsData from '../api/EventsData';
export default class EventDetailView extends Component {
  static navigationOptions = {
<<<<<<< HEAD
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
=======
    title: 'Event Detail',
  };
  
  constructor() {
    super()
    this.state = {
      event: null
    };
  }
  
  async componentDidMount() {
    let event = await eventsData.getEvent(this.props.navigation.state.params.key);
    this.setState({event});
  }
  
  render() {
    const { navigate } = this.props.navigation,
      event = this.state.event;
    
    if (event === null) {
      return (<View></View>);
    } else {
      console.log(event)
      return (
        <View>
        <Text>{event.name}</Text>
        <Text>{event.description}</Text>
        <Button
        onPress={() => navigate('BookTicket')}
        title="Book Ticket"
>>>>>>> a54566950438251a5dba3ab113f61b3300d1f0e8
        />
        </View>
      );
    }
  }
}
