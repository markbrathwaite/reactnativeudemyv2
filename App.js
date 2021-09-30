import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import SignUpScreen from './src/SignUpScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';


const navigator = createStackNavigator (
  {
    Home: HomeScreen,
    SignUp: SignUpScreen,
    Search: SearchScreen,
    Explore: ExploreScreen,
    ResultsShow: ResultsShowScreen
  },
  
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Collab Universe'
    }
  }
);
export default createAppContainer(navigator);

