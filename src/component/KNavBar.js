/**
 * Created by itwo on 7/3/2019.
 */
import React,{Component} from 'react';
import { color } from '../common/theme';
import {View, TouchableOpacity, Text, StyleSheet, withNavigation } from 'react-native';
import IonIcons from 'react-native-vector-icons';

type Props={}
class KNavBar extends Component<Props> {
  render(){
    return (
      <View style={styles.navBar}>
        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}  style={styles.backBtn}>
          <IonIcons name="ios-arrow-back" />
        </TouchableOpacity>
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.right}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

export default withNavigation(KNavBar);

const styles = Stylesheet.create({
  navBar: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backBtn: {
    position: 'absolute',
    height: '100%',
    width: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: color('white'),
    fontWeight: 'bold'
  },
  right: {
    position: 'absolute',
    height: '100%',
    width: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});