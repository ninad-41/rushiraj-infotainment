import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  Linking,
  Header,
} from 'react-native';
import firebase from 'firebase';
import * as WebBrowser from 'expo-web-browser';
import MyHeader from '../components/MyHeader'


export default class Ent extends Component {
    


  render() {
    return (
      <View style={{flex : 1, backgroundColor : '#FFE8FA'}}>
      <MyHeader title="Entertainment" style={styles.headerText} navigation={this.props.navigation}/>

      <ScrollView>
     
      <Image
         
          style={{ width: 200, height: 200, marginLeft : 67, marginTop : 90}}
        />
        


      
      <Text style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 300, backgroundColor:'#FFC4EB', marginTop:10}}
      
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>International News</Text>
      </Text>

 <TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#FFC4EB', marginTop:25}}
      onPress={()=>{this._handleOpenWithWebBrowser2()}}
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>Political News</Text>
      </TouchableOpacity>

       <TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#FFC4EB', marginTop:25}}
      onPress={()=>{this._handleOpenWithWebBrowser3()}}
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>National News</Text>
      </TouchableOpacity>

       <TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#FFC4EB', marginTop:25}}
      onPress={()=>{this._handleOpenWithWebBrowser4()}}
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>Covid 19 News</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#FFC4EB', marginTop:25}}
      onPress={()=>{this._handleOpenWithWebBrowser5()}}
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>Sports News</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#FFC4EB', marginTop:25}}
      onPress={()=>{this._handleOpenWithWebBrowser6()}}
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>Business News</Text>
      </TouchableOpacity>

<TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#FFC4EB', marginTop:25}}
      onPress={()=>{this._handleOpenWithWebBrowser7()}}
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>Book Reviews </Text>
      </TouchableOpacity>

<TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#FFC4EB', marginTop:25}}
      onPress={()=>{this._handleOpenWithWebBrowser8()}}
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>Movie Reviews</Text>
      </TouchableOpacity>

      



      </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
})
