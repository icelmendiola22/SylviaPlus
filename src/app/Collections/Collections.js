import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
// Import Ionicons for icons
import { Ionicons } from '@expo/vector-icons';
// Import components for header
import DrawerButton from 'app/Components/DrawerButton.js';
import HeaderLogo from 'app/Components/HeaderLogo.js';
import SearchBarIcon from 'app/Components/SearchBarIcon.js';
import ShoppingCartIcon from 'app/Components/ShoppingCartIcon.js';
// Import data for Collections categories
import CollectionsData from 'app/Collections/CollectionsData.js';

// Get width of iPhone/Android screen
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Collections extends Component {
  // toggleDrawer is a static function that controls the drawer menu button
  toggleDrawer = () => {
    this.props.navigation.toggleDrawer();
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
  // Renders Collections categories for one row
  _renderCategoryItems(item) {
      return (
        <View style={styles.borderTop}>
          <View style={styles.collectionsRow}>
            {/* Category on the left */}
            <TouchableOpacity onPress={() => this.toggleCategoryProds()}>
              <View style={styles.leftCategory}>
                <Image
                  source={item.img1}
                  style={styles.imageMargin}
                />
                <Text style={styles.categoryText}>{item.name1}</Text>
              </View>
            </TouchableOpacity>
            {/* Category on the right */}
            <TouchableOpacity onPress={() => this.toggleCategoryProds()}>
              <View style={styles.rightCategory}>
                <Image
                  source={item.img2}
                  style={styles.imageMargin}
                />
                <Text style={styles.categoryText}>{item.name2}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <SafeAreaView>
          {/* Header */}
          <View style={styles.headerContainer}>
            {/* Start of flex row for header */}
            <View style={styles.headerFlexRow}>
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
              {/* Search and Cart icon */}
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
          {/* Body */}
          <View style={styles.scrollContainer}>
            <ScrollView>
              {/* Start of flex column */}
              <View style={styles.bodyContainer}>
                {/* Collections title */}
                <Text style={styles.collectionsTitle}>Collections</Text>
                {/* Function below renders each row of Collection categories */}
                {CollectionsData.map(item => {
                  return this._renderCategoryItems(item);
                })}
                <View style={{marginBottom: 30}}></View>
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
    backgroundColor: 'white'
  },
  headerContainer: {
    height: 50
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
    backgroundColor: '#F2F2F2'
  },
  bodyContainer: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'column'
  },
  collectionsTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#636363',
    marginVertical: 15
  },
  borderTop: {
    borderTopWidth: 1
  },
  collectionsRow: {
    flex: 1,
    flexDirection: 'row'
  },
  leftCategory: {
    width: width/2 -10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F4F4',
    borderRightWidth: 1
  },
  rightCategory: {
    width: width/2 - 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F4F4'
  },
  imageMargin: {
    marginVertical: 20
  },
  categoryText: {
    fontStyle: 'italic',
    alignSelf: 'flex-start',
    color: '#636363',
    marginStart: 10
  },
});
