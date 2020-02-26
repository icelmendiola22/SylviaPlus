import React, { Component } from "react";
import {ScrollView, Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions} from "react-native";
import { Icon, Input } from 'react-native-elements';
import { NavigationActions } from "react-navigation";
import Constants from 'expo-constants';
// Import components for header
import DrawerButton from "app/Components/DrawerButton.js";
import HeaderLogo from "app/Components/HeaderLogo.js";
import SearchBarIcon from "app/Components/SearchBarIcon.js";
import ShoppingCartIcon from "app/Components/ShoppingCartIcon.js";
// Import body icons
import AccountIcon from 'app/Components/AccountIcon.js';
import SettingsIcon from 'app/Components/SettingsIcon.js'

// Get width of iPhone/Android screen
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Setting extends Component {
   // toggleDrawer is a static function that controls the drawer menu button
   toggleDrawer = () => {
    this.props.navigation.toggleDrawer();
  };
  // toggleMyAccount is a static function that navigates to the My Account page
  toggleMyAccount = () => {
    this.props.navigation.navigate('Second');
  };
  // toggleSetsAndPrefs is a static function that navigates to the Settings and Preferences page
  toggleSetsAndPrefs = () => {
    this.props.navigation.navigate('Third');
  };
  // toggleSearch is a static function that navigates to the search page
  toggleSearch = () => {
    this.props.navigation.navigate('Ninth');
  };
  // toggleSearch is a static function that navigates to the shopping cart page
  toggleCart = () => {
    this.props.navigation.navigate('Eleventh');
  };
  // toggleSearch is a static function that navigates to the category products page
  toggleCategoryProds= () => {
    this.props.navigation.navigate('Twelfth');
  };
  // toggleSearch is a static function that navigates to the product page
  toggleProdPage= () => {
    this.props.navigation.navigate('Thirtheenth');
  };
  // toggleSearch is a static function that navigates to the collections page
  toggleCollections = () => {
    this.props.navigation.navigate('Fourth');
  };
  // toggleCheckOut is a static function that navigates to the checkout page
  toggleCheckOut = () => {
    this.props.navigation.navigate('Fourtheenth');
  };

  render() {
    return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <View style={styles.headerFlexRow}>
            <View style={styles.menuIcon}>
              <TouchableOpacity onPress={() => this.toggleDrawer()}>
                <DrawerButton />
              </TouchableOpacity>
            </View>
            <View style={styles.logoHeader}>
              <HeaderLogo />
            </View>
            <View style={styles.searchCartIcon}>
              <TouchableOpacity onPress={() => this.toggleSearch()}>
                <SearchBarIcon />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.toggleCart()}>
                <ShoppingCartIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.scrollContainer}>
          <ScrollView>
            <View style={styles.bodyContainer}>
              <View style={styles.titleContainer}>
                <TouchableOpacity onPress={() => this.toggleMyAccount()}>
                  <AccountIcon />
                </TouchableOpacity>
                <Text style={styles.title}>Settings & Preferences</Text>
                <TouchableOpacity style={{borderBottomWidth: 1}} onPress={() => this.toggleSetsAndPrefs()}>
                  <SettingsIcon />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.optionContainer}>
                <Text style={styles.optionTxt}>Preferences</Text>
                <Icon name='arrow-forward' type='MaterialIcons'  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionContainer}>
                <Text style={styles.optionTxt}>Orders & Returns</Text>
                <Icon name='arrow-forward' type='MaterialIcons'  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionContainer}>
                <Text style={styles.optionTxt}>Change Account Information</Text>
                <Icon name='arrow-forward' type='MaterialIcons'  />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.toggleCheckOut()} style={styles.logOutButton} >
                <Text style={styles.logOutTxt}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Constants.statusBarHeight,
  },
  headerContainer: {
    height: 50,
    backgroundColor: 'white',
  },
  headerFlexRow: {
    flex: 1,
    flexDirection: 'row'
  },
  menuIcon: {
    width: width / 8,
    height: 50,
  },
  logoHeader: {
    width: width/8 * 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchCartIcon: {
    width: width/8 * 2,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  scrollContainer: {
    height: height,
    paddingBottom: 75,
    backgroundColor: '#F4F4F4'
  },
  bodyContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 10
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#636363',
    alignSelf: 'center'
  },
  optionContainer: {
    flexDirection:'row',
    height: 40,
    justifyContent: 'space-between',
    width: width,
    marginTop: 25,
    backgroundColor: 'white',
    borderBottomColor: '#CAC1C1',
    borderTopColor: '#CAC1C1',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  optionTxt: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#636363"
  },
  logOutButton: {
    height: 60,
    width: width/2,
    borderColor: "#CAC1C1",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logOutTxt: {
    fontSize: 23,
    color: '#636363',
    fontWeight: 'bold'
  },
});
