import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { Button } from 'antd-mobile-rn'
import KStatusBar from '../component/KStatusBar'

type Props = {};
export default class WelcomePage extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <KStatusBar></KStatusBar>
        <Text>Home Screen</Text>
        <Button type="primary"
          onClick={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Tab' })
              ],
            }))
          }}>Go to Title</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});