import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaProvider,
  Button,
} from 'react-native';
import {Header} from 'react-native-elements'
import MyHeader from '../components/MyHeader';

export default class HomeScreen extends React.Component{
  render(){
  return(
    <View style={styles.container}>
    <MyHeader title="Helpline No.s" style={styles.headerText} navigation={this.props.navigation} backgroundColor={"#F9EF52"}/>
    <Text style={{fontWeight : 'bold',
    fontSize : 19,
    backgroundColor:'#F2FE71',
    fontFamily : 'Maiandra GD', padding : 10}}>

  
      </Text>
    </View>
  )
  }
    }  

const styles= StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#ABABF9'
      
    }
  });