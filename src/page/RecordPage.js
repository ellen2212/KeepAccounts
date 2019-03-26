/**
 * Created by itwo on 7/3/2019.
 */
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { color } from '../common/theme';
import { UltimateListView } from 'react-native-ultimate-listview';
import KBGIcon from '../component/KBGIcon';


const data = [
  {title:'catering',icon:'ios-nutrition'},
  {title:'traffic',icon:'ios-nutrition'},
  {title:'shopping',icon:'ios-nutrition'},
  {title:'exerise',icon:'ios-nutrition'},
  {title:'housing',icon:'ios-nutrition'}
]

const setting = {title:'Settings',icon:'ios-settings',action: 'add-type'}

type Props = {};
export default class RecordPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    }
  }


  async sleep(time: any){
    await new Promise(resolve=>setTimeout(()=>resolve(),time));
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

      await this.sleep(500);
      startFetch(rowData,pageLimit);
    }catch (err) {
      abortFetch();
    }
  };

  onClick(item) {
    if(item.action == 'add-type') {
      this.props.navigation.navigate({'routeName':'AddType'});
    }else{

    }
  }

  renderItem(item, index, separators){
    return (
      <TouchableOpacity onPress={()=>this.onClick(item)} style={styles.item}>
        <View style={styles.center}>
          <KBGIcon name={item.icon}  size={25} color={color('MainColor')}></KBGIcon>
          <Text style={styles.center}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  titleChange(value) {

  }

  costChange(value) {

  }

  render() {
    return (
      <View style={styles.container}>
        <UltimateListView
          onFetch={(page,startFetch,abortFetch)=>this.onFetch(page,startFetch,abortFetch)}
          item={(item, index, separators)=>this.renderItem(item, index, separators)}
          numColumns={4}
        />
        <View style={styles.footer}>
          <TextInput value={this.state.title} onChange={(val)=>this.titleChange(val)}></TextInput>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    width: '25%',
    padding: 10
  },
  center: {
    flex: 1,
    alignItems: 'center'
  },
  footer : {
    position: 'absolute',
    bottom: 0
  }
});