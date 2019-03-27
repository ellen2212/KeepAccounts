/**
 * Created by itwo on 27/3/2019.
 */
import React,{Component} from 'react';
import { View, TouchableHighlight, StyleSheet, Button } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { color } from '../common/theme';
import { withNavigation } from 'react-navigation'

type Props={}
class KAddButton extends Component<Props>{
  constructor(props){
    super(props);
  }

  render() {
    console.warn(this.props.navigation);
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={()=>this.props.navigation.navigate('Record')} style={styles.button} underlayColor={color('MainColor')} activeOpacity={0.5}>
          <IonIcons name="ios-add" size={40} color="#fff"/>
        </TouchableHighlight>
      </View>

    );
  }
}

export default withNavigation(KAddButton);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    top: -20,
    zIndex: 10,
    paddingBottom:10,
    backgroundColor: '#fff'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: color('MainColor')
  }
})