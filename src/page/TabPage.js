/**
 * Created by itwo on 7/3/2019.
 */
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomePage from './HomePage';
import ChartPage from './ChartPage';
import RecordPage from './RecordPage';
import FindPage from './FindPage';
import MyPage from './MyPage';
import KStatusBar from '../component/KStatusBar';

const TabNavigator = createBottomTabNavigator({
  Home: HomePage,
  Chart: ChartPage,
  Record : RecordPage,
  Find : FindPage,
  My : MyPage
});
const Tab = createAppContainer(TabNavigator);
type Props = {};
export default class TabPage extends Component<Props> {
  render() {
    return (
      <Tab/>
    );
  }
}