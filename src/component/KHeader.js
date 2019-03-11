/**
 * Created by itwo on 11/3/2019.
 */
import React,{Component} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { WingBlank, Flex, WhiteSpace, DatePicker } from 'antd-mobile-rn';
import { color } from '../common/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DatePickerChildren = ({extra,onClick,children})=>(
  <TouchableOpacity onPress={onClick} style={styles.datePickerChildBtn}>
    <Text style={styles.flexItemFirst}>{children}</Text>
    <Text style={styles.flexItemLater}>
      {extra.split('-')[1]}
      <Text style={{fontSize:15}}>
        月
      </Text>
      <Ionicons name="md-arrow-dropdown" size={20}/>
    </Text>
  </TouchableOpacity>
);

type Props={}
export default class KHeader extends Component<Props> {
  constructor(props){
    super(props);
    let now = Date.now();
    this.state = {
      date : new Date(now),
      year: '2019',
    }
    this.OnChange = (date)=>{
      let d= date.split('-');
      this.setState({date:date ,year:d[0]});
    }
  }
  render(){
    if(this.props.headerType == 'home') {
      return (
          <View style={styles.container} >
            <WhiteSpace size="lg"/>
              <Text style={styles.title}>Ellen记账</Text>
            <WhiteSpace size="lg"/>
            <Flex>
              <Flex.Item>
                <DatePicker
                  value={this.state.date}
                  mode="date"
                  minDate={new Date(2010,1,1)}
                  maxDate={new Date(2025,12,31)}
                  onChange={this.OnChange}
                  format="YYYY-MM-DD"
                >
                  <DatePickerChildren>{this.state.year}</DatePickerChildren>
                </DatePicker>
              </Flex.Item>
              <Flex.Item>
                <Text style={styles.flexItemFirst}>收入</Text>
                <Text style={styles.flexItemLater}>10000</Text>
              </Flex.Item>
              <Flex.Item>
                <Text style={styles.flexItemFirst}>支出</Text>
                <Text style={styles.flexItemLater}>2000</Text>
              </Flex.Item>
            </Flex>
            <WhiteSpace size="sm"/>
          </View>
      );
    }else{
      return (
        <View>
          <WingBlank style={{marginBottom:5}} >
            <Text>支出</Text>
          </WingBlank>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color('MainColor'),
    marginBottom:5
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20

  },
  flexItemFirst: {
    textAlign: 'center',
    fontSize: 12,
  },
  flexItemLater: {
    textAlign: 'center',
    fontSize: 20
  }
});
