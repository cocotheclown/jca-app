import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { FormLabel, FormInput } from 'react-native-elements'


export default class BookTicket extends Component {
    // static navigationOptions = {
    //     title: 'Book Ticket',
    // };
    render() {
        return (
            <View>
                <Text>Book Ticket</Text>
                <FormLabel>Name</FormLabel>
                <FormInput/>
                

            </View>
        );
    }
}
