/**
 * Created by itwo on 7/3/2019.
 */
import React,{Component} from 'react';
import { StatusBar } from 'react-native';

type Props={}
export default class KStatusBar extends Component<Props> {
  render(){
    return (
      <StatusBar backgroundColor="#fed954"/>
    );
  }
}