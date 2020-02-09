import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import Adash from './src/Adash'
import Acart from './src/Acart'
import Playstore from './src/Playstore'


const StackNav = createStackNavigator({
  Dashboard: {
    screen: Adash,
    navigationOptions: {
      headerShown: false,
    }
  },
  MainScreen: {
    screen: Acart
  }
})

const AppContainer = createAppContainer(StackNav)



export default class App extends Component {
  render() {
    return (
      <>
        <AppContainer />
      </>
    )
  }
}