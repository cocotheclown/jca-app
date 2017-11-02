import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Button, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { FormLabel, FormInput } from 'react-native-elements'
import EventsView from './EventsView'

export default class BookTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            emailAddress: ''
        };
      }
    static navigationOptions = {
        title: 'Book Ticket',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Book Ticket</Text>
                <FormLabel>First Name</FormLabel>
               
                <FormInput onChangeText={(firstName) => this.setState({firstName})}/>
                <FormLabel>Last Name</FormLabel>
                <FormInput onChangeText={(lastName) => this.setState({lastName})}/>
                <FormLabel>Email</FormLabel>
                <FormInput onChangeText={(emailAddress) => this.setState({emailAddress})}/>
                <Button
                onPress={() => navigate('EventsView')}
                title="Submit"
              />

            </View>
        );
    }
}





// const submit = submit({
//         () => navigate('BookTicket')
// });
