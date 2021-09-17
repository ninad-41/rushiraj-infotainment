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
    <MyHeader title="HOME" style={styles.headerText} navigation={this.props.navigation} backgroundColor={"#F9EF52"}/>
    <Text style={{fontWeight : 'bold',
    fontSize : 19,
    backgroundColor:'#F2FE71',
    padding:70,
    fontFamily : 'Maiandra GD', padding : 10}}>

    This is an 'INFOTAINMENT' app.
    It provides us lots of information through different types of news.
    The special features of this app  is:- 
    There is an UK Accent , which means a pronnouciation tab .
    Then comes , Pocket Dictionary , it will help you to find the meanings 
    of words..
    
      </Text>

<Text style={{fontWeight : 'bold',
    fontSize : 19,
    backgroundColor:'#F2FE71',
    padding:30,
    fontFamily : 'Maiandra GD',}}>
    #R.G Creations..

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