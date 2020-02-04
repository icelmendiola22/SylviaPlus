import React from 'react';

// Imports for drawer menu
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
//import { StackNavigator } from 'react-navigation';

// Imports for screen screens
import Home from 'app/Home/Home.js';
import Profile from 'app/Profile/Profile.js';
import SetsAndPrefs from 'app/Profile/SettingsAndPreferences.js';
import Collections from 'app/Collections/Collections.js';
import AboutUs from 'app/AboutUs/AboutUs.js';
import ContactUs from 'app/AboutUs/ContactUs.js';
import Faq from 'app/AboutUs/Faq.js';
import LoginSignup from 'app/LoginSignup/LoginSignup.js';
import SearchPage from 'app/SearchPage/SearchPage.js';
import ForgotPassword from 'app/LoginSignup/ForgotPassword.js';
import ShoppingCart from 'app/ShoppingCart/ShoppingCart.js';

// Imports custom drawer
import SideMenu from 'app/Components/SideMenu.js'
import SearchBar from 'app/Components/SearchBar.js'

// Stack Navigator for the Home option of Navigation Drawer
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Home Option will be indexed here
  First: {
    screen: Home,
    navigationOptions: {
      headerShown: false
    }
  },
});

//Stack Navigator for the Profile option of Navigation Drawer
const SecondActivity_StackNavigator = createStackNavigator({
  //All the screen from the Profile Option will be indexed here
  Second: {
    screen: Profile,
    navigationOptions: {
      headerShown: false
    }
  },
});

// Stack Navigator for the Settings and Preferences option of Navigation Drawer
const ThirdActivity_StackNavigator = createStackNavigator({
  // All the screen from the Settings and Preferences Option will be indexed here
  Third: {
    screen: SetsAndPrefs,
    navigationOptions: {
      headerShown: false
    }
  },
});

// Stack Navigator for the Collections option of Navigation Drawer
const FourthActivity_StackNavigator = createStackNavigator({
  // All the screen from the Collections Option will be indexed here
  Fourth: {
    screen: Collections,
    navigationOptions: {
      headerShown: false
    }
  },
});

// Stack Navigator for the About Us option of Navigation Drawer
const FifthActivity_StackNavigator = createStackNavigator({
  // All the screen from the About Us option will be indexed here
  Fifth: {
    screen: AboutUs,
    navigationOptions: {
      headerShown: false
    }
  },
});

// Stack Navigator for the Contact Us option of Navigation Drawer
const SixthActivity_StackNavigator = createStackNavigator({
  // All the screen from the Contact Us option will be indexed here
  Sixth: {
    screen: ContactUs,
    navigationOptions: {
      headerShown: false
    }
  },
});

// Stack Navigator for the FAQ option of Navigation Drawer
const SeventhActivity_StackNavigator = createStackNavigator({
  // All the screen from the FAQ option will be indexed here
  Seventh: {
    screen: Faq,
    navigationOptions: {
      headerShown: false
    }
  },
});

// Stack Navigator for the Log In or Sign Up option of Navigation Drawer
const EigthActivity_StackNavigator = createStackNavigator({
  // All the screen from the Log In or Sign Up option will be indexed here
  Eigth: {
    screen: LoginSignup,
    navigationOptions: {
      headerShown: false
    }
  },
});

// Stack Navigator for the Search page
const NinthActivity_StackNavigator = createStackNavigator({
  Ninth: {
    screen: SearchPage,
    navigationOptions: {
      headerShown: false
    }
  },
});

// Stack Navigator for the Forgot Password page
const TenthActivity_StackNavigator = createStackNavigator({
  Tenth: {
    screen: ForgotPassword,
    navigationOptions: {
      headerShown: false
    }
  },
});

// Stack Navigator for the Shopping Cart page
const EleventhActivity_StackNavigator = createStackNavigator({
  Eleventh: {
    screen: ShoppingCart,
    navigationOptions: {
      headerShown: false
    }
  },
});

// Drawer menu options
const Drawer = createDrawerNavigator(
  {
    // Drawer Optons and indexing
    NavScreen1: { screen: FirstActivity_StackNavigator },
    NavScreen2: { screen: SecondActivity_StackNavigator },
    NavScreen3: { screen: ThirdActivity_StackNavigator },
    NavScreen4: { screen: FourthActivity_StackNavigator },
    NavScreen5: { screen: FifthActivity_StackNavigator },
    NavScreen6: { screen: SixthActivity_StackNavigator },
    NavScreen7: { screen: SeventhActivity_StackNavigator },
    NavScreen8: { screen: EigthActivity_StackNavigator },
    NavScreen9: { screen: NinthActivity_StackNavigator },
    NavScreen10: { screen: TenthActivity_StackNavigator },
    NavScreen11: { screen: EleventhActivity_StackNavigator}
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: SideMenu
  }
);


export default createAppContainer(Drawer);
