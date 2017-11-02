import React from 'react';
import {NavigatorIOS} from 'react-native';

import EventsData from './api/EventsData';

// import {NavigatorIOSApp} from './views/ViewNavigator';
import {EventsView} from './views/EventsView';
import {EventDetailView} from './views/EventDetailView';
import MyScene from './views/MyScene';

const eventsData = new EventsData();

export default class App extends React.Component {

  render() {
    return (
        <NavigatorIOS initialRoute={
          {
            component: MyScene,
            title: 'My Initial Scene',
          }
        }
        style={{flex: 1}}
        />
      );
  }
}
