/**
 * Created by itwo on 7/3/2019.
 */
import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import IonIcons from 'react-native-vector-icons';
import { UltimateListView } from 'react-native-ultimate-listview';
import KBGIcon from '../component/KBGIcon';
import { color } from '../common/theme';
import { icons } from '../common/icons';
import KNavBar from '../component/KNavBar';
import { Flex } from 'antd-mobile-rn';
import { KStorage } from '../service/KStorage';

type Props = {};
export default class AddDetailPage extends Component<Props> {

  constructor(props) {
    super(props);

    //params
    this.type = this.props.navigation.getParam('type');

    this.state = {
      typeIcon : icons[0][0],
      title: ''
    }
  }

  header() {
    return (
      <View>
        <KNavBar title="添加类别">
          <Button onPress={()=>this.save()}>完成</Button>
        </KNavBar>
        <KBGIcon name={this.state.typeIcon} color={color('MainColor')}/>
        <TextInput value={this.state.title} onChange={(value)=>this.setState({title,value})}></TextInput>
      </View>
    );
  }

  save() {
    KStorage.AddType(this.type,{
      typeIcon : this.state.typeIcon,
      title: this.state.title,
      id: Date.now(),
      index: KStorage.getTypes(this.type).length
    });
    this.props.navigation.goBack();
  }

  renderIconGroup(item,key) {
    let views = [];
    for(let l of item) {
      let view =
        <Flex.Item style={styles.item}>
          <TouchableOpacity onPress={()=>this.setState({typeIcon: l})}>
            <KBGIcon name={l} color={color('border')}/>
          </TouchableOpacity>

        </Flex.Item>;
      views.push(view);
    }
    return (
      <View>
        <Text>{key}</Text>
        <Flex>
          {views}
        </Flex>
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


  render() {
    return (
      <View style={styles.container}>
        {this.header()}
        {this.renderIconGroup()}
        {this.footer()}
      </View>
    );
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
  item: {
    width: '25%'
  }
});