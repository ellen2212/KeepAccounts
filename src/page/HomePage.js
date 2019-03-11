/**
 * Created by itwo on 7/3/2019.
 */
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import KStatusBar from '../component/KStatusBar';
import KHeader from '../component/KHeader';
import { Flex } from 'antd-mobile-rn';
import { UltimateListView } from 'react-native-ultimate-listview';
import IonIcons from 'react-native-vector-icons/Ionicons'

const data = [
  {title:'pay-catering',icon:'nutrition',cost:300},
  {title:'pay-traffic',icon:'nutrition',cost:300},
  {title:'pay-shopping',icon:'nutrition',cost:300},
  {title:'pay-exerise',icon:'nutrition',cost:3000},
  {title:'pay-housing',icon:'nutrition',cost:300}
]

type Props = {};
export default class HomePage extends Component<Props> {
  sleep = (time: any)=> new Promise(resolve=>setTimeout(()=>resolve(),time));
  onFetch = async (page = 1,startFetch,abortFetch)=>{
    try {
      let rowData;
      let pageLimit = 30;
      if(page === 3) {
        rowData = [];
      }else{
        let l = data.length;
        rowData = Array.from({length:pageLimit}).map((i)=>data[(i % l)]);
      }
      console.log(rowData);
      await this.sleep(2000);
      startFetch(rowData,pageLimit);
    }catch (err) {
      abortFetch();
    }
  }
  renderItem = (item, index)=>{
    return (
      <Flex>
        <Flex.Item>
          <IonIcons name={item.icon} size="20"/>
        </Flex.Item>
        <Flex.Item>
          <Text>{item.title}</Text>
        </Flex.Item>
        <Flex.Item>
          <Text>{item.cost}</Text>
        </Flex.Item>
      </Flex>
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
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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