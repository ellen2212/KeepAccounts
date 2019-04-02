/**
 * Created by itwo on 7/3/2019.
 */
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import IonIcons from 'react-native-vector-icons';
import {SegmentedControl, WingBlank} from 'antd-mobile-rn';
import { color } from '../common/theme';
import KNavBar from '../component/KNavBar';
import { SortableList } from 'react-native-sortable-list';
import KStorage from '../service/KStorage';

type Props = {};
export default class AddTypePage extends Component<Props> {

  constructor(props) {
    super(props);
    this.type = 1;
  }

  header() {
    return (
      <View>
        <KNavBar title="添加类别"/>
        <WingBlank>
          <SegmentedControl values={['收入','支出']} onChange={(e)=>this.type = e.nativeEvent.selectedSegmentIndex+1 } tintColor={color('black')}/>
        </WingBlank>
      </View>
    );
  }
  async onFetch() {
    try{
      let res = await KStorage.getTypes(this.type);
      res = res.sort((a,b)=>a > b);
      return res;
    }catch(e){
      return [];
    }
  }

  renderItem(data,active) {
    let btn;
    if(item.index > -1) {
      btn =
        <TouchableOpacity>
          <IonIcons name="ios-remove-circle" color={color('danger')} />
        </TouchableOpacity>;
    }else{
      btn =
        <TouchableOpacity>
          <IonIcons name="ios-add-circle" color={color('secondary')} />
        </TouchableOpacity>;
    }
    return (
      <View>
        {btn}
        <Text>{item.title}</Text>
        <button>
          <IonIcons name="ios-reorder" color={color('border')} />
        </button>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.header()}
        <Text style={styles.instructions}>Hello React Native</Text>
        <SortableList
          data={()=>this.onFetch()}
          renderRow={({data,active})=>this.renderItem(data,active)}
        >
        </SortableList>
        {this.footer()}
      </View>
    );
  }

  footer() {
    return (
      <TouchableOpacity style={styles.footer} onPress={()=>this.add()}>
        <IonIcons name="ios-add" />
        添加类别
      </TouchableOpacity>
    );
  }

  add() {
    this.props.navigation.navigate('AddDetail',{
      type: this.type
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  footer : {
    position: 'absolute',
    bottom: 0,
    height: 50,
    borderTopWidth: 1,
    borderColor: color('border'),
    backgroundColor: '#fff',
    width: '100%',
    textAlign: 'center'
  },
});