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
  Linking
} from 'react-native';
import firebase from 'firebase';
import * as WebBrowser from 'expo-web-browser';
import MyHeader from '../components/MyHeader';

export default class News extends Component {
    _handleOpenWithWebBrowser1 = () => {
    WebBrowser.openBrowserAsync('https://www.bbc.com/news/world');
  };
_handleOpenWithWebBrowser2 = () => {
    WebBrowser.openBrowserAsync('https://www.lyrarc.com/');
  };
  _handleOpenWithWebBrowser3 = () => {
    WebBrowser.openBrowserAsync(' https://indianexpress.com/d');
  };
  _handleOpenWithWebBrowser4 = () => {
    WebBrowser.openBrowserAsync('https://www.covid19india.org/');
  };
_handleOpenWithWebBrowser5 = () => {
    WebBrowser.openBrowserAsync('https://sports.ndtv.com');
  };
_handleOpenWithWebBrowser6 = () => {
    WebBrowser.openBrowserAsync('https://zeenews.india.com/international-business');
  };
  _handleOpenWithWebBrowser7 = () => {
    WebBrowser.openBrowserAsync('https://timesofindia.indiatimes.com/life-style/books/reviews');
  };
  _handleOpenWithWebBrowser8 = () => {
    WebBrowser.openBrowserAsync('https://www.primevideo.com/?ref_=dvm_pds_gen_in_as_s_g_movie1|m_O3nOigQ9c_c475408224377');
  };


  render() {
    return (
      <View style={{flex : 1, backgroundColor : '#FFFFC4'}}>
    <MyHeader title= "NEWS" style={styles.headerText} navigation={this.props.navigation}/>
      <ScrollView>
      <Image
          source={require('../assets/news-new-post.gif')}
          style={{ width: 300, height: 270, marginLeft : 17, marginTop : -50}}
        />

      <Text style={{fontWeight : 'bold', fontSize : 23, backgroundColor:'#82CAFF',fontFamily : 'sans-serif'}}>  Please Select A Category :~</Text>
      <TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#73F87C', marginTop:25}}
      onPress={()=>{this._handleOpenWithWebBrowser1()}}
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>International News</Text>
      </TouchableOpacity>

 <TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#F87373', marginTop:25}}
      onPress={()=>{this._handleOpenWithWebBrowser2()}}
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>Political News</Text>
      </TouchableOpacity>

       <TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#F2F873', marginTop:25}}
      onPress={()=>{this._handleOpenWithWebBrowser3()}}
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>National News</Text>
      </TouchableOpacity>

       <TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#73F8F5', marginTop:25}}
      onPress={()=>{this._handleOpenWithWebBrowser4()}}
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>Covid 19 News</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#C273F8', marginTop:25}}
      onPress={()=>{this._handleOpenWithWebBrowser5()}}
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>Sports News</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#F873F2', marginTop:25}}
      onPress={()=>{this._handleOpenWithWebBrowser6()}}
      >
  <Text style={{fontFamily:'cursive',fontSize:17,fontWeight:'bold'}}>Business News</Text>
      </TouchableOpacity>

<TouchableOpacity style={{borderRadius : 20,alignItems : 'center',alignContent :'center',justifyContent : 'center',
      alignSelf : 'center', height : 60, width : 200, backgroundColor:'#CFFFC4', marginTop:25}}
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
