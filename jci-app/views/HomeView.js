import React, { Component } from 'react';
import { StyleSheet, Image, ImageBackground, AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeView extends Component {
    static navigationOptions = { title: 'Home', };

    render() {
        const { navigate } = this.props.navigation;
        let styles = StyleSheet.create({
            backgroundImage: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: null,
              height: null,
              resizeMode: 'cover',
              backgroundColor: 'rgba(0,0,0,0)',
            },
          });
        return (
            <Image
                source={require('../images/bg-image.jpg')}
                style={styles.backgroundImage}
            >
            <Button 
                onPress={() => navigate('EventsView')} 
                title="Events"
            />
            <Button 
                onPress={() => navigate('BookTicket')} 
                title="Book Ticket" 
            />
        </Image>
        )
    }
}
