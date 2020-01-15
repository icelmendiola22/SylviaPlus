import React from 'react';

// Imports for drawer menu
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

// Imports for drawer menu screens
import Home from 'app/Home/Home.js';
import Profile from 'app/Profile/Profile.js';
import Collections from 'app/Collections/Collections.js';
import AboutUs from 'app/AboutUs/AboutUs.js';
import LoginSignup from 'app/LoginSignup/LoginSignup.js';

// Drawer menu options
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

export default createAppContainer(Drawer);
