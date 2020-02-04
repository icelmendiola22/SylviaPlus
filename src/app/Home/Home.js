import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { NavigationActions } from 'react-navigation';

import DrawerButton from 'app/Components/DrawerButton.js';
import SearchBar from 'app/Components/SearchBar.js';
import ShoppingCartIcon from 'app/Components/ShoppingCartIcon.js';
import HeaderLogo from 'app/Components/HeaderLogo.js';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Home extends Component {
  // toggleDrawer is a static function that controls the drawer menu button
  toggleDrawer = () => {
    this.props.navigation.toggleDrawer();
  };
  // toggleSearch is a static function that navigates to the search page
  toggleSearch = () => {
    this.props.navigation.navigate('Ninth');
  }
  // toggleSearch is a static function that navigates to the search page
  toggleCart = () => {
    this.props.navigation.navigate('Eleventh');
  }

  render () {
    return (
      <SafeAreaView>
        {/* Header */}
        <View style={styles.headerContainer}>
          {/* Drawer icon for side menu */}
          <View style={styles.menuIcon}>
            <TouchableOpacity onPress={() => this.toggleDrawer()}>
              <DrawerButton />
            </TouchableOpacity>
          </View>
          {/* Logo */}
          <View style={styles.logoHeader}>
            <HeaderLogo />
          </View>
          {/* Search icon */}
          <View style={styles.searchIcon}>
            <TouchableOpacity onPress={() => this.toggleSearch()}>
              <SearchBar />
            </TouchableOpacity>
          </View>
          {/* Shopping cart icon */}
          <View style={styles.cartIcon}>
            <TouchableOpacity onPress={() => this.toggleCart()}>
              <ShoppingCartIcon />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  // Not using this style so might need to delete later on
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  searchIcon: {
    width: width/8,
    height: 50,
  },
  cartIcon: {
    width: width/8,
    height: 50,
  }
});
