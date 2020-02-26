import React, { Component } from 'react';
import { StyleSheet, Image, ImageBackground, Text, View, SafeAreaView, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
// Import components for header
import DrawerButton from 'app/Components/DrawerButton.js';
import HeaderLogo from 'app/Components/HeaderLogo.js';
import SearchBarIcon from 'app/Components/SearchBarIcon.js';
import ShoppingCartIcon from 'app/Components/ShoppingCartIcon.js';

// Get width of iPhone/Android screen
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class AboutUs extends Component {
  // toggleDrawer is a static function that controls the drawer menu button
  toggleDrawer = () => {
    this.props.navigation.toggleDrawer();
  };
  // toggleSearch is a static function that navigates to the search page
  toggleSearch = () => {
    this.props.navigation.navigate('Ninth');
  }
  // toggleCart is a static function that navigates to the shopping cart page
  toggleCart = () => {
    this.props.navigation.navigate('Eleventh');
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

          <View style={styles.scrollContainer}>
            <View style={styles.bodyContainer}>
              <ImageBackground
                source={require('assets/bgPattern.png')}
                style={styles.backgroundImage}
              >
                <ScrollView>
                  <View style={styles.bodyMargin}>
                    <View style={styles.titleContainer}>
                      <Text style={styles.title}>About Us</Text>
                      <Text style={styles.quote}>“Home is where our heart is”</Text>
                    </View>
                    <Text style={styles.bodyTxt}>
                      We believe style, fashion and great design can make life much
                      more beautiful and colorful! Thats why here at Sylvia+, you will find
                      an assortment of breath-taking contemporary to antique treasures, every
                      element tells a story and culture around the world!
                    </Text>
                    <Image
                      source={require('assets/aboutUsImage1.png')}
                      style={styles.image}
                    />
                    <Text style={styles.bodyTxt}>
                      All of our products are inspired by original designs, hand craft in mix media,
                      and blends in east west culture, each of them to reflect our lifestyle, and the
                      art of living.
                    </Text>
                    <Image
                      source={require('assets/aboutUsImage2.png')}
                      style={styles.image}
                    />
                    <Text style={styles.bodyTxt}>
                      We hope you enjoy our products and service. And we look forward to meeting you
                      in the near future, to share your story of Happy Life, and Philosophy of Artful
                      Living!
                    </Text>
                  </View>
                </ScrollView>
              </ImageBackground>
            </View>
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
    paddingTop: Constants.statusBarHeight
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
    backgroundColor: '#F4F4F4',
  },
  bodyContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  bodyMargin: {
    marginHorizontal: 10
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  titleContainer: {
    marginTop: 40,
    alignItems: 'center',
    marginBottom: 10
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#636363',
    textDecorationLine: 'underline'
  },
  quote: {
    fontSize: 23,
    color: '#636363',
    marginTop: 5,
    fontStyle: 'italic'
  },
  bodyTxt: {
    color:'#636363',
    fontSize: 18,
    marginVertical: 25
  },
  image: {
    alignSelf: 'center'
  }
});
