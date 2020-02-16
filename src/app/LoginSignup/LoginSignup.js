import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
// Import components for header
import DrawerButton from 'app/Components/DrawerButton.js';
import HeaderLogo from 'app/Components/HeaderLogo.js';
import SearchBarIcon from 'app/Components/SearchBarIcon.js';
import ShoppingCartIcon from 'app/Components/ShoppingCartIcon.js';

// Get width of iPhone/Android screen
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class LoginSignup extends Component {
  constructor() {
    super();
    this.state = {
      customStyleIndex: 0,
      //Default selected Tab Indexes for cusatom SegmentedControlTab
    };
  }
  //handle tab selection for custom Tab Selection SegmentedControlTab
  handleCustomIndexSelect = (index: number) => {
    this.setState(prevState => ({ ...prevState, customStyleIndex: index }));
  };
  // toggleDrawer is a static function that controls the drawer menu button
  toggleDrawer = () => {
    this.props.navigation.toggleDrawer();
  };
  // toggleSearch is a static function that navigates to the search page
  toggleSearch = () => {
    this.props.navigation.navigate('Ninth');
  }
  // toggleSearch is a static function that navigates to the forgot password page
  toggleForgotPassword = () => {
    this.props.navigation.navigate('Tenth');
  }
  // toggleSearch is a static function that navigates to the shopping cart page
  toggleCart = () => {
    this.props.navigation.navigate('Eleventh');
  }

  render () {
    const { customStyleIndex } = this.state;

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
                <View style={styles.controlTab}>
                  {/* Log In and Sign up control tab */}
                  <SegmentedControlTab
                    values={['Log In', 'Sign Up']}
                    selectedIndex={customStyleIndex}
                    onTabPress={this.handleCustomIndexSelect}
                    borderRadius={8}
                    tabsContainerStyle={styles.tabsContainer}
                    tabStyle={styles.tab}
                    firstTabStyle={styles.firstTab}
                    activeTabStyle={styles.activeTab}
                    tabTextStyle={styles.tabText}
                    activeTabTextStyle={styles.activeTabText}
                  />
                  {/* Log In tab */}
                  {customStyleIndex === 0 && (
                    <View style={styles.tabContent}>
                      {/* Email input box */}
                      <View style={styles.inputBox}>
                        <TextInput style={styles.inputText}
                          placeholder="Email"
                        />
                      </View>
                      {/* Password input box */}
                      <View style={styles.inputBox}>
                        <TextInput
                          secureTextEntry={true}
                          style={styles.inputText}
                          placeholder="Password"
                        />
                      </View>
                      {/* Log in button */}
                      <TouchableOpacity style={styles.logInSignUpBtn}>
                        <View>
                          <Text style={styles.btnText}>Sign In</Text>
                        </View>
                      </TouchableOpacity>
                      {/* Forgot password button */}
                      <View style={styles.forgotBtn}>
                        <TouchableOpacity
                          style={styles.forgotPos}
                          onPress={() => this.toggleForgotPassword()}>
                          <Text style={styles.forgotText}>Forgot your password?</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )}
                  {/* Sign up tab */}
                  {customStyleIndex === 1 && (
                    <View style={styles.tabContent}>
                      {/* First name input box */}
                      <View style={styles.inputBox}>
                        <TextInput style={styles.inputText}
                          placeholder="First name"
                        />
                      </View>
                      {/* Last name input box */}
                      <View style={styles.inputBox}>
                        <TextInput style={styles.inputText}
                          placeholder="Last name"
                        />
                      </View>
                      {/* Email input box */}
                      <View style={styles.inputBox}>
                        <TextInput style={styles.inputText}
                          placeholder="Email"
                        />
                      </View>
                      {/* Password input box */}
                      <View style={styles.inputBox}>
                        <TextInput style={styles.inputText}
                          secureTextEntry={true}
                          placeholder="Password"
                        />
                      </View>
                      {/* Sign up button */}
                      <TouchableOpacity style={styles.logInSignUpBtn}>
                        <View>
                          <Text style={styles.btnText}>Create an account</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
                {/* Continue as guest option */}
                <View style={styles.guestContainer}>
                  <Text style={styles.contGuest}>
                    Continue as Guest
                  </Text>
                  <TouchableOpacity style={styles.contGuestBtn}>
                    <View style={styles.rowFlex}>
                      <Text style={styles.btnText}>Continue  </Text>
                      <Image
                        source={require('assets/rightArrowIcon.png')}
                        style={{width: 26, height: 23}}
                      />
                    </View>
                  </TouchableOpacity>
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
  controlTab: {
    backgroundColor: 'white',
    marginVertical: 45,
    marginHorizontal: 20,
    borderRadius: 8
  },
  tab: {
    borderColor: 'transparent'
  },
  activeTab: {
    backgroundColor: 'white'
  },
  tabText: {
    fontSize: 20,
    marginVertical: 20,
    color: 'gray',
    borderRightColor: 'black'
  },
  activeTabText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    textDecorationLine: 'underline'
  },
  tabContent: {
    color: '#444444',
    backgroundColor: 'white',
    fontSize: 18,
    paddingTop: 15,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  inputBox: {
    height: 49,
    borderColor: '#CAC1C1',
    borderWidth: 1,
    borderRadius: 7,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  inputText: {
    marginHorizontal: 10,
    height: 49
  },
  logInSignUpBtn: {
    backgroundColor: '#D2C097',
    marginVertical: 25,
    marginHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center'
  },
  forgotBtn: {
    alignItems: 'flex-end',
    backgroundColor: 'white',
    marginBottom: 25,
    paddingTop: 20,
    marginHorizontal: 20,
    borderRadius: 8
  },
  forgotPos: {
    position: 'absolute'
  },
  forgotText: {
    color: 'rgba(0, 100, 250, 0.75)',
    textDecorationLine: 'underline',
    fontSize: 15
  },
  guestContainer: {
    marginTop: 56,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 20
  },
  contGuest: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 24,
    marginLeft: 18
  },
  contGuestBtn: {
    backgroundColor: '#D2C097',
    paddingVertical: 10,
    marginVertical: 25,
    marginRight: 20,
    marginLeft: width / 2,
    alignItems: 'center'
  },
  btnText: {
    fontSize: 18,
    color: 'white'
  },
  rowFlex: {
    flexDirection: 'row'
  }
});
