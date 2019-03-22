/**
 * Created by itwo on 7/3/2019.
 */
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import KStatusBar from '../component/KStatusBar';
import KHeader from '../component/KHeader';
import { UltimateListView } from 'react-native-ultimate-listview';
import { color, commonStyle } from '../common/theme';
import KBGIcon from '../component/KBGIcon';
import {Flex} from 'antd-mobile-rn';

const data = [
  {title:'pay-catering',icon:'ios-nutrition',cost:'300',createDate: '2019-03-01'},
  {title:'pay-traffic',icon:'ios-nutrition',cost:'300',createDate: '2019-03-02'},
  {title:'pay-shopping',icon:'ios-nutrition',cost:'300',createDate: '2019-03-03'},
  {title:'pay-exerise',icon:'ios-nutrition',cost:'3000',createDate: '2019-03-04'},
  {title:'pay-housing',icon:'ios-nutrition',cost:'300',createDate: '2019-03-05'}
]

type Props = {};
export default class HomePage extends Component<Props> {
  constructor(props) {
    super(props);
    this.headers= {}
  }
  async sleep(time: any){
    return new Promise(resolve=>setTimeout(()=>resolve(),time));
  }
  onFetch(page = 1,startFetch,abortFetch){
    try {
      let rowData;
      let pageLimit = 20;
      if(page === 2) {
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
  };
  renderItem(item, index, separators){
    let headerContent =
      <View style={[styles.content,commonStyle.border]}>
        <Flex>
          <Flex.Item>
            <Text>{item.createDate}</Text>
          </Flex.Item>
          <Flex.Item>
            <Text style={styles.textRight}>支出 {item.cost}</Text>
          </Flex.Item>
        </Flex>
      </View>;
    if(!this.headers[item.createDate] || this.headers[item.createDate] >= index) {
      this.headers[item.createDate] = index;
    }else{
      headerContent = null;
    }
    let mainContent =
      <View>
        <Flex>
          <Flex.Item style={styles.iconItem}>
            <KBGIcon name={item.icon} size={18} color={color('MainColor')}></KBGIcon>
          </Flex.Item>
          <Flex.Item style={commonStyle.border}>
            <TextInput value={item.title} onChange={this.onTitleChange}></TextInput>
          </Flex.Item>
          <Flex.Item style={commonStyle.border}>
            <TextInput style={styles.textRight} value={item.cost} onChange={this.onCostChange} keyboardType="numeric"></TextInput>
          </Flex.Item>
        </Flex>
      </View>;
    return (
      <View>
        {headerContent}
        {mainContent}
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <KStatusBar></KStatusBar>
        <KHeader headerType="home"></KHeader>
        <UltimateListView
          onFetch={()=>this.onFetch()}
          item={(item, index, separators)=>this.renderItem(item, index, separators)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textRight: {
    textAlign: 'right',
    paddingRight: 10
  },
  iconItem: {
    width: 50,
    maxWidth: 50
  }
});