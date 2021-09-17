import React, { Component } from 'react';
import { Header, Icon, Badge } from 'react-native-elements';
import { View, Text, StyeSheet, Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class MyHeader extends React.Component {
  render() {
    return (
      <Header
        leftComponent={
          <Icon
           
           
            name="bars"
            type="font-awesome"
            color="#F9EF52"
            onPress={() => this.props.navigation.toggleDrawer()}
          />
        }
        centerComponent={{
          text: this.props.title,
          style: { color: '#F9EF52', fontSize: 25, fontWeight: 'bold', fontStyle : 'Maiandra GD' 
           },
        }}
      />
    );
  }
}
