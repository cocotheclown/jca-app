import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigatorIOS, View, TouchableHighlight, Text } from 'react-native';


export default class MyScene extends Component {
    static propTypes = {
      navigator: PropTypes.object.isRequired,
    }
  
    _onForward = () => {
      this.props.navigator.push({
        title: 'Scene ' + nextIndex,
      });
    }
  
    render() {
      return (
        <View>
        
          <Text>Current Scene: { this.props.title }</Text>
          <Text>ABD</Text>
          <Text>Curr</Text>
          <TouchableHighlight onPress={this._onForward}>
            <Text>Tap me to load the next scene</Text>
          </TouchableHighlight>
        </View>
      )
    }
  }