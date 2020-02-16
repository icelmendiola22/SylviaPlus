import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, SafeAreaView, Dimensions } from 'react-native';
// Import components for header
import DrawerButton from 'app/Components/DrawerButton.js';
import HeaderLogo from 'app/Components/HeaderLogo.js';
import SearchBarIcon from 'app/Components/SearchBarIcon.js';
import ShoppingCartIcon from 'app/Components/ShoppingCartIcon.js';

// Get width of iPhone/Android screen
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class ForgotPassword extends Component {
  // toggleDrawer is a static function that controls the drawer menu button
  toggleDrawer = () => {
    this.props.navigation.toggleDrawer();
  };
  // toggleSearch is a static function that navigates to the search page
  toggleSearch = () => {
    this.props.navigation.navigate('Ninth');
  }
  // toggleSearch is a static function that navigates to the login signup page
  toggleLogInSignUp = () => {
    this.props.navigation.navigate('Eigth');
  }
  // toggleSearch is a static function that navigates to the shopping cart page
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
          {/* Start of body */}
          <View style={styles.scrollContainer}>
            <ScrollView>
              <View syle={styles.bodyContainer}>
                {/* Reset password card */}
                <View style={styles.cardContainer}>
                  {/* Title */}
                  <Text style={styles.Title}>Reset your</Text>
                  <Text style={styles.Title}>Password</Text>
                  {/* Caption */}
                  <Text style={styles.caption}>
                    We will send you an email to reset your password.
                  </Text>
                  {/* Email input box */}
                  <View style={styles.inputBox}>
                    <TextInput style={styles.inputText}
                      placeholder="Email"
                    />
                  </View>
                  {/* Create an account button */}
                  <TouchableOpacity style={styles.submitBtn}>
                    <View>
                      <Text style={styles.btnText}>Create an account</Text>
                    </View>
                  </TouchableOpacity>
                  {/* Cancel button */}
                  <View style={styles.cancelBtn}>
                    <TouchableOpacity
                      style={styles.cancelPos}
                      onPress={() => this.toggleLogInSignUp()}>
                      <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
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
    flexDirection: 'column'
  },
  cardContainer: {
    backgroundColor: 'white',
    fontSize: 18,
    marginTop: 45,
    paddingVertical: 25,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  Title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  caption: {
    fontSize: 15,
    color: 'gray',
    marginVertical: 20,
    textAlign: 'center'
  },
  inputBox: {
    height: 49,
    borderColor: '#CAC1C1',
    borderWidth: 1,
    borderRadius: 7
  },
  inputText: {
    marginHorizontal: 10,
    height: 49
  },
  submitBtn: {
    backgroundColor: '#D2C097',
    marginTop: 25,
    paddingVertical: 10,
    alignItems: 'center'
  },
  btnText: {
    fontSize: 18,
    color: 'white'
  },
  cancelBtn: {
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 25,
    paddingTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  cancelPos: {
    position: 'absolute'
  },
  cancelText: {
    color: 'gray',
    fontSize: 15
  }
});
