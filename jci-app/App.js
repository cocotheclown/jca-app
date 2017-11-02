import React from 'react';

import { StyleSheet, AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';


import {NavigatorIOS} from 'react-native';

import EventsData from './api/EventsData';

// import {NavigatorIOSApp} from './views/ViewNavigator';
import {EventsView} from './views/EventsView';
import {EventDetailView} from './views/EventDetailView';
import MyScene from './views/MyScene';

const eventsData = new EventsData();

export default class App extends React.Component {


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
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

export const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});