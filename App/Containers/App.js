import React, { Component } from 'react';
import RootContainer from './RootContainer';

import { View } from 'react-native';

/**
 *
 * Call Config, Redux, createStore inside Provider here
 *
 */

class App extends Component {
  render() {
    return (
      <View>
        <RootContainer />
      </View>
    );
  }
}

export default App;
