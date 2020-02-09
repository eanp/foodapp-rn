import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Root} from 'native-base';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Storage from './src/redux/store';
import Router from './src/Aconf';
const {store, persistor} = Storage();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Root>
            <Router />
          </Root>
        </PersistGate>
      </Provider>
    );
  }
}
