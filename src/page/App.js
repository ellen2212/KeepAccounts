/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TabPage from './TabPage';
import WelcomePage from './WelcomePage';
import RecordPage from './RecordPage';
import AddTypePage from './AddTypePage';

const AppNavigator = createStackNavigator({
  Welcome: {screen: WelcomePage},
  Tab: {screen: TabPage},
  Record: {screen: RecordPage},
  AddType: {screen: AddTypePage}
},{
  initialRouteName: 'Welcome',
  headerMode: 'none',
  mode: 'modal'
});

export default createAppContainer(AppNavigator);

