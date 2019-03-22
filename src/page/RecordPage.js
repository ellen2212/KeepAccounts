/**
 * Created by itwo on 7/3/2019.
 */
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { color } from '../common/theme';
import { UltimateListView } from 'react-native-ultimate-listview';
import KBGIcon from '../component/KBGIcon';
const data = [
  {title:'pay-catering',icon:'ios-nutrition'},
  {title:'pay-traffic',icon:'ios-nutrition'},
  {title:'pay-shopping',icon:'ios-nutrition'},
  {title:'pay-exerise',icon:'ios-nutrition'},
  {title:'pay-housing',icon:'ios-nutrition'}
]

const setting = {title:'pay-housing',icon:'ios-nutrition'}

type Props = {};
export default class RecordPage extends Component<Props> {


  async sleep(time: any){
    return new Promise(resolve=>setTimeout(()=>resolve(),time));
  }
  async onFetch(page = 1,startFetch,abortFetch){
    try {
      let rowData;
      let pageLimit = 5;
      if(page === 2) {
        rowData = [];
      }else{
        let l = data.length;
        rowData = Array.from({length:pageLimit}).map((v,i)=>data[(i % l)]);
      }
      rowData.push(setting);

      await this.sleep(2000);
      startFetch(rowData,pageLimit);
    }catch (err) {
      abortFetch();
    }
  };

  onClick() {
    console.warn('click');
  }

  renderItem(item, index, separators){
    return (
      <TouchableOpacity onPress={()=>this.onClick(item)}>
        <KBGIcon name={item.icon}  size={18} color={color('MainColor')}></KBGIcon>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <UltimateListView
          onFetch={()=>this.onFetch()}
          item={(item, index, separators)=>this.renderItem(item, index, separators)}
          numColumns={4}

        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});