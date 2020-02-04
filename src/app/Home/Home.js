import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
// Import Swiper for image carousel on top of page
import Swiper from 'react-native-web-swiper';
// Import Ionicons for icons
import { Ionicons } from '@expo/vector-icons';

// Import components for header
import DrawerButton from 'app/Components/DrawerButton.js';
import HeaderLogo from 'app/Components/HeaderLogo.js';
import SearchBar from 'app/Components/SearchBar.js';
import ShoppingCartIcon from 'app/Components/ShoppingCartIcon.js';

// Get width of iPhone/Android screen
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
  // toggleSearch is a static function that navigates to the shopping cart page
  toggleCart = () => {
    this.props.navigation.navigate('Eleventh');
  }

  render () {
    return (
      <View style={{backgroundColor: 'white'}}>
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
          </View>
          {/* Body */}
          <ScrollView>
            {/* Start of flex column */}
            <View
              style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between'}}>
              {/* First flex column for image carousel */}
              <View style={{height: 300}}>
                <Swiper
                  from={0}
                  minDistanceForAction={0.1}
                  controlsProps={{
                    dotsTouchable: true,
                    prevPos: 'left',
                    nextPos: 'right',
                    nextTitle: '',
                    prevTitle: '',
                  }}
                >
                  {/* Slide 1 */}
                  <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                    <Image
                      source={require('assets/testImage1.png')}
                    />
                  </View>
                  {/* Slide 2 */}
                  <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                    <Text>Slide 2</Text>
                  </View>
                  {/* Slide 3 */}
                  <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                    <Text>Slide 3</Text>
                  </View>
                </Swiper>
              </View>
              {/* Second flex column */}
              <View style={{flexDirection: 'row', marginVertical: 10, marginHorizontal: 10, justifyContent: 'space-between'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#636363'}}>Collections</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 13}}>View more </Text>
                  <Ionicons
                    name="ios-arrow-forward"
                    size={16}
                    style={{width: 15, height: 25}}
                  />
                </View>
              </View>
              {/* Third flex column */}
              <View style={{height: 50, backgroundColor: 'skyblue'}}></View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Not using this style so might need to delete later on
  headerContainer: {
    height: 50
  },
  headerFlexRow: {
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
