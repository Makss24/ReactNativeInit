import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';

class RootContainer extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <Text>Setup architecture</Text>
      </View>
    );
  }
}

export default RootContainer;
