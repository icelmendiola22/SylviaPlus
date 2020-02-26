import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, SafeAreaView, ScrollView } from 'react-native';
// Import components for header
import DrawerButton from 'app/Components/DrawerButton.js';
import HeaderLogo from 'app/Components/HeaderLogo.js';
import SearchBarIcon from 'app/Components/SearchBarIcon.js';
import ShoppingCartIcon from 'app/Components/ShoppingCartIcon.js';
// Import body icons
import AccountIcon from 'app/Components/AccountIcon.js';
import SettingsIcon from 'app/Components/SettingsIcon.js'

// Get width of iPhone/Android screen
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class MyAccount extends Component {
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
  // toggleCart is a static function that navigates to the shopping cart page
  toggleCart = () => {
    this.props.navigation.navigate('Eleventh');
  };
  // toggleProdPage is a static function that navigates to the product page
  toggleProdPage= () => {
    this.props.navigation.navigate('Thirtheenth');
  };

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
              <View style={styles.bodyContainer}>
                {/* Title and icons */}
                <View style={styles.titleContainer}>
                  <TouchableOpacity style={{borderBottomWidth: 1}} onPress={() => this.toggleMyAccount()}>
                    <AccountIcon />
                  </TouchableOpacity>
                  <Text style={styles.title}>My Account</Text>
                  <TouchableOpacity onPress={() => this.toggleSetsAndPrefs()}>
                    <SettingsIcon />
                  </TouchableOpacity>
                </View>
                {/* User image and name */}
                <View style={styles.picNameContainer}>
                  <Image
                    source={require('assets/userPlaceholder.jpg')}
                    style={styles.userPic}
                  />
                  <Text style={styles.userName}>FirstName LastName</Text>
                </View>
                {/* My Information section */}
                <Text style={styles.infoTitle}>My Information</Text>
                <View style={styles.infoContainer}>
                  {/* Name */}
                  <View style={styles.fieldRow}>
                    <Text style={styles.fieldName}>Name: </Text>
                    <View style={styles.flex}>
                      <Text style={styles.userInfo}>FirstName LastName</Text>
                    </View>
                  </View>
                  {/* Address */}
                  <View style={styles.fieldRow}>
                    <Text style={styles.fieldName}>Address: </Text>
                    <View style={styles.flex}>
                      <Text style={styles.userInfo}>#### Street Name, City, State Zipcode</Text>
                    </View>
                  </View>
                  {/* Email */}
                  <View style={styles.fieldRow}>
                    <Text style={styles.fieldName}>Email: </Text>
                    <View style={styles.flex}>
                      <Text style={styles.userInfo}>first_lastName@email.com</Text>
                    </View>
                  </View>
                </View>
                {/* Favorites section */}
                {/* Title */}
                <View style={styles.faveContainer}>
                  <Text style={styles.faveTitle}>Favorites</Text>
                </View>
                {/* Favorite items */}
                {/* Item */}
                <TouchableOpacity onPress={() => this.toggleProdPage()}>
                  <View style={styles.itemContainer}>
                    {/* Thumbnail */}
                    <Image
                      source={require('assets/contemfusion.png')}
                      style={styles.itemPic}
                    />
                    <View style={styles.itemInfo}>
                      {/* Item name */}
                      <Text style={styles.itemName}>Metallic Copper Glazing Ceramic Table Lamp</Text>
                      {/* Price */}
                      <Text style={styles.itemPrice}>$49.99</Text>
                    </View>
                    {/* Heart icon */}
                    <TouchableOpacity style={styles.faveIcon}>
                      <Image
                        source={require('assets/faveIcon.png')}
                      />
                    </TouchableOpacity>
                  </View>
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
    backgroundColor: 'white',
    flex: 1
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
    backgroundColor: '#F4F4F4'
  },
  bodyContainer: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'column'
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#636363'
  },
  picNameContainer: {
    alignItems: 'center',
    height: 175,
    marginVertical: 15,
    justifyContent: 'space-between'
  },
  userPic: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 150 / 2,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#F4F4F4'
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#636363'
  },
  infoTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#636363',
    marginVertical: 10
  },
  infoContainer: {
    marginHorizontal: 15,
    marginBottom: 30
  },
  fieldRow: {
    flexDirection: 'row',
    marginVertical: 5
  },
  fieldName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#636363',
    width: 100
  },
  flex: {
    flex: 1
  },
  userInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#403E3E'
  },
  faveContainer: {
    alignItems: 'center',
    borderBottomWidth: 2,
    paddingBottom: 2,
    marginHorizontal: 10,
    marginBottom: 15
  },
  faveTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#636363'
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    borderColor: '#DED9D9',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  itemPic: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    left: 10
  },
  itemInfo: {
    width: width - 190,
    left: 20
  },
  itemName: {
    color: '#565050',
    fontSize: 15,
    fontWeight: 'bold'
  },
  itemPrice: {
    color: '#565050',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5
  },
  faveIcon: {
    position: 'absolute',
    right: 10
  }
});
