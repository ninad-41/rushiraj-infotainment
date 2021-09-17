import React from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSidebarMenu from './CustomSidebarMenu';
import Ent from '../screens/Ent';
import WelcomeScreen from '../screens/Home';
import { Icon } from 'react-native-elements';
import News from '../screens/News';
import DictScreen from '../screens/Dictionary'
import Pronounciation from '../screens/Pronounciation'

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home : {
      screen: AppTabNavigator,
       navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
    },
   
    
    News : {
      screen: News,
       navigationOptions: {
        drawerIcon: (
          <Image
            source={{uri : 'http://cdn.onlinewebfonts.com/svg/img_224040.png'}}
            style={{ width: 20, height: 20 }}
          />
        ),
        drawerLabel: 'News',
      },
    },
    
    Dict : {
      screen: DictScreen,
       navigationOptions: {
        drawerIcon: (
          <Image
            source={require('../assets/dict.png')}
            style={{ width: 20, height: 20 }}
          />
        ),
        drawerLabel: 'Dictionary',
      },
    },
   Pronounciation : {
      screen: Pronounciation,
       navigationOptions: {
        drawerIcon: (
          <Image
            source={require('../assets/1.jfif')}
            style={{ width: 20, height: 20 }}
          />
        ),
        drawerLabel: 'Pronounciation',
      },
    },
  },
  {
    contentComponent: CustomSidebarMenu,
  },
  {
    initialRouteName: 'Home',
  }
);
