/**
 * Created by itwo on 7/3/2019.
 */
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import KStatusBar from '../component/KStatusBar';
import KHeader from '../component/KHeader';
import { UltimateListView } from 'react-native-ultimate-listview';
import { color } from '../common/theme';
import KBGIcon from '../component/KBGIcon';
import {Flex} from 'antd-mobile-rn';

const data = [
  {title:'pay-catering',icon:'ios-nutrition',cost:300},
  {title:'pay-traffic',icon:'ios-nutrition',cost:300},
  {title:'pay-shopping',icon:'ios-nutrition',cost:300},
  {title:'pay-exerise',icon:'ios-nutrition',cost:3000},
  {title:'pay-housing',icon:'ios-nutrition',cost:300}
]

type Props = {};
export default class HomePage extends Component<Props> {
  constructor(props) {
    super(props);
    this.onTitleChange = (event) =>{
      console.warn(event);
    }
    this.onCostChange = (event) =>{
      console.warn(event);
    }
  }
  sleep = (time: any)=> new Promise(resolve=>setTimeout(()=>resolve(),time));
  onFetch = async (page = 1,startFetch,abortFetch)=>{
    try {
      let rowData;
      let pageLimit = 30;
      if(page === 3) {
        rowData = [];
      }else{
        let l = data.length;
        rowData = Array.from({length:pageLimit}).map((v,i)=>data[(i % l)]);
      }
      await this.sleep(2000);
      startFetch(rowData,pageLimit);
    }catch (err) {
      abortFetch();
    }
  }
  renderItem = (item, index, separators)=>{
    return (
      <Flex>
        <Flex.Item flex={1}>
          <KBGIcon name={item.icon} size={18} color={color('MainColor')}></KBGIcon>
        </Flex.Item>
        <Flex.Item flex={6}>
          <TextInput value={item.title} onChange={this.onTitleChange}></TextInput>
        </Flex.Item>
        <Flex.Item style={styles.textRight} flex={3}>
          <TextInput value={item.cost} onChange={this.onCostChange} keyboardType="numeric"></TextInput>
        </Flex.Item>
      </Flex>
    );
  }
  renderHeader = (item)=>{
    return (
      <View></View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <KStatusBar></KStatusBar>
        <KHeader headerType="home"></KHeader>
        <UltimateListView
          onFetch={this.onFetch}
          item={this.renderItem}
          header={this.renderHeader}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textRight: {
    textAlign: 'right'
  }
});