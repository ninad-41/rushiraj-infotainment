import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WelcomeScreen from '../screens/Home';
import Ent from '../screens/Ent';
import News from '../screens/News'
import DictScreen from '../screens/Dictionary'
import HelplinenoScreen from '../screens/Dictionary'

export const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/Home-icon.png')}
          style={{ width: 35, height: 35 }}
        />
      ),
      tabBarLabel: 'Home',
    },
  },
   
  
 
   News: {
    screen: News,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/news-icon-43.png')}
          style={{ width: 37, height: 36 }}
        />
      ),
      tabBarLabel: 'News',
    },

  },
 
  Dict: {
    screen: DictScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require('../assets/dict.png')}
          style={{ width: 35, height: 35}}
        />
      ),
      tabBarLabel:'Dictionary',
    },
  },
});
