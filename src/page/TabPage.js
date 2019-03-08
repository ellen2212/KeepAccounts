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
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator({
  Home: HomePage,
  Chart: ChartPage,
  Record : RecordPage,
  Find : FindPage,
  My : MyPage
},{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ({focused,horizontal,tintColor})=>{
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      let suffix = '';
      switch (routeName){
        case 'Home':
          iconName = `ios-list-box${suffix}`;
          break;
        case 'Chart':
          iconName = `ios-stats${suffix}`;
          break;
        case 'Record':
          iconName = `ios-add${suffix}`;
          break;
        case 'Find':
          iconName = `ios-compass${suffix}`;
          break;
        case 'My':
          iconName = `ios-contact${suffix}`;
          break;
      }
      return <IconComponent name={iconName} size={25} color={tintColor}/>
    }
  }),
  tabBarOptions: {
    activeTintColor: '#fed954',
    inactiveTintColor: 'gray'
  }
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