/**
 * Created by itwo on 11/3/2019.
 */
'use strict';
import { StyleSheet } from 'react-native';

const theme = {
  MainColor: '#fed954',
  lightgray:  '#999999',//icon
  gray:       '#EFEFF4',//background
  darkgray:   '#A8AEBA',//avatar
  border:     '#c8c7cc'
};

function color(colorName) {
  if(!colorName) {
    return 'red';
  }
  var color = theme[colorName];
  if(!color) {
    color='red';
  }
  return color;
}

const commonStyle = StyleSheet.create({
  mainBgColor: {
    backgroundColor: color('MainColor')
  },
  textCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

module.exports = {
  color,
  commonStyle
}