/**
 * Created by itwo on 11/3/2019.
 */
'use strict';
import { StyleSheet } from 'react-native';

const theme = {
  MainColor: '#fed954'
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
  }
});

module.exports = {
  color,
  commonStyle
}