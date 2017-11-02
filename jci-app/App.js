import React from 'react';
import { StyleSheet, AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import EventsData from './api/EventsData';
import HomeView from './views/HomeView';
import EventsView from './views/EventsView';
import EventDetailView from './views/EventDetailView';
import BookTicket from './views/BookTicket';

const eventsData = new EventsData();

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

export const SimpleApp = StackNavigator({
  HomeView: { screen: HomeView },
  EventsView: { screen: EventsView },
  BookTicket: { screen: BookTicket}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
