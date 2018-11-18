import React from 'react';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import Settings from './screens/Settings';
import Home from './screens/Home';

const MainNavigator = createStackNavigator({
  SettingScreen: { screen: Settings },
  HomeScreen: { screen: Home },
});
export default createAppContainer(MainNavigator);
