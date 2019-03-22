/**
 * Created by itwo on 18/3/2019.
 */
import React,{Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons'
import { color } from '../common/theme';

type Props={}
export default class KBGIcon extends Component<Props>{


  render() {
    return (
      <View style={styles.bgIcon}>
        <IonIcons {...this.props}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  bgIcon: {
    width:30,
    height:30,
    margin: 10,
    borderRadius: 60,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: color('gray')
  }
});
