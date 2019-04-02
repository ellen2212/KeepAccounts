/**
 * Created by itwo on 7/3/2019.
 */
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import HomePage from './HomePage';
import ChartPage from './ChartPage';
import RecordPage from './RecordPage';
import AddTypePage from './AddTypePage';
import AddDetailPage from './AddDetailPage';
import FindPage from './FindPage';
import MyPage from './MyPage';
import IonIcons from 'react-native-vector-icons/Ionicons';
import KAddButton from '../component/KAddButton';

const recordNavigator = createStackNavigator({
  Record: RecordPage,
  AddType: AddTypePage,
  AddDetail: AddDetailPage
},{
  initialRouteName: 'Record',
  headerMode: 'none'
})


const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: ()=>({
      tabBarIcon: ({tintColor})=>(
        <IonIcons name="ios-list-box" size={25} color={tintColor}/>
      )
    })
  },
  Chart: {
    screen: ChartPage,
    navigationOptions: ()=>({
      tabBarIcon: ({tintColor})=>(
        <IonIcons name="ios-stats" size={25} color={tintColor}/>
      )
    })
  },
  Record : {
    screen: recordNavigator,
    navigationOptions: (navigation)=>({
      tabBarIcon: ()=>(
        <KAddButton rootNavigation={navigation}></KAddButton>
      ),
      tabBarVisible: false
    })
  },
  Find : {
    screen: FindPage,
    navigationOptions: ()=>({
      tabBarIcon: ({tintColor})=>(
        <IonIcons name="ios-compass" size={25} color={tintColor}/>
      )
    })
  },
  My : {
    screen: MyPage,
    navigationOptions: ()=>({
      tabBarIcon: ({tintColor})=>(
        <IonIcons name="ios-contact" size={25} color={tintColor}/>
      )
    })
  }
},{
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
      <Tab rootNavigation={this.props.navigation}/>
    );
  }
}