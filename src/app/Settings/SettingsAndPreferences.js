import React, { Component } from "react";
import {ScrollView, Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions} from "react-native";
import { Icon, Input  } from 'react-native-elements';
import { NavigationActions } from "react-navigation";
import Constants from 'expo-constants';
import DrawerButton from "app/Components/DrawerButton.js";
import HeaderLogo from "app/Components/HeaderLogo.js";
import SearchBarIcon from "app/Components/SearchBarIcon.js";
import ShoppingCartIcon from "app/Components/ShoppingCartIcon.js";

// Get width of iPhone/Android screen
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Setting extends Component {
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

        <View style={styles.title}>
          <Text style={styles.title}>Setting and Preferences </Text>
        </View>

        <View style={styles.bodyContainer}>
          <TouchableOpacity style={styles.txtContainer}>
            <Text style={styles.txt}>Preferences</Text>
            <Icon style={styles.arrowIcon} name='arrow-forward' type='MaterialIcons'  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.txtContainer}>
            <Text style={styles.txt}>Orders and Returns</Text>
            <Icon style={styles.arrowIcon} name='arrow-forward' type='MaterialIcons'  />
          </TouchableOpacity>
          <TouchableOpacity style={styles.txtContainer}>
            <Text style={styles.txt}>Change Account Information</Text>
            <Icon style={styles.arrowIcon} name='arrow-forward' type='MaterialIcons'  />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.toggleCheckOut()} style={styles.boxButton} >
            <Text style={styles.txtBox}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    paddingTop: Constants.statusBarHeight,
  },
  headerContainer: {
    height: 50,
    backgroundColor: '#F4F4F4',
  },
  txtContainer: {
    flexDirection:'row',
    height: 40,
    width: width,
    marginTop: 18,
    backgroundColor: '#F4F4F4',
    borderBottomColor: '#CAC1C1',
    borderBottomWidth: 1,
    borderTopColor: '#CAC1C1',
    borderTopWidth: 1,
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
    justifyContent: 'center',
    left: 12,
  },
  searchCartIcon: {
    width: width/8 * 2,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  arrowIcon: {
    width: width/8,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: "serif",
    fontWeight: "bold",
    fontSize: 28,
    height: 40,
    alignItems: "center", 
    color: '#636363',
    top: 5,
  },
  bodyContainer: {
    top: 100,
    position:'absolute',
  },  
  txt: {
    fontFamily: "serif",
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 0.01,
    color: "#636363",
  },
  txtBox: {
    fontSize: 18,
    height: 24,
    alignContent: "center",
    position: "absolute",
    left: 150,
    top: 10
  },
  boxButton: {
    height: 49,
    borderColor: "#CAC1C1",
    borderWidth: 1,
    borderRadius: 7,
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: '#F4F4F4'
  },
});
