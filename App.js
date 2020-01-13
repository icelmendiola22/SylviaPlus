import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import MenuButton from 'app/DrawerNavigator/MenuButton.js'

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from 'app/Home/Home.js';
import Profile from 'app/Profile/Profile.js';
import Collections from 'app/Collections/Collections.js';
import AboutUs from 'app/AboutUs/AboutUs.js';
import LoginSignup from 'app/LoginSignup/LoginSignup.js';



const Drawer = createDrawerNavigator({
  Screen1: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  Screen2: {
    screen: Profile,
    navigationOptions: {
      drawerLabel: 'Profile',
    },
  },
  Screen3: {
    screen: Collections,
    navigationOptions: {
      drawerLabel: 'Collections',
    },
  },
  Screen4: {
    screen: AboutUs,
    navigationOptions: {
      drawerLabel: 'About Us',
    },
  },
  Screen5: {
    screen: LoginSignup,
    navigationOptions: {
      drawerLabel: 'Log In | Sign Up',
    },
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
});

export default createAppContainer(Drawer);
