import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import DrawerButton from 'app/Components/DrawerButton.js'
import SearchBarIcon from 'app/Components/SearchBarIcon.js'

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

  render () {
    const { customStyleIndex } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            <DrawerButton />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.toggleSearch()}>
            <SearchBarIcon />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={styles.test}>
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

            {customStyleIndex === 0 && (
              <View style={styles.tabContent}>
                <View style={styles.inputBox}>
                  <TextInput style={styles.inputText}
                    placeholder="Email"
                  />
                </View>
                <View style={styles.inputBox}>
                  <TextInput
                    secureTextEntry={true}
                    style={styles.inputText}
                    placeholder="Password"
                  />
                </View>
                  <TouchableOpacity style={styles.logInSignUpBtn}>
                    <View>
                      <Text style={styles.btnText}>Sign In</Text>
                    </View>
                  </TouchableOpacity>
                <View style={styles.forgotBtn}>
                  <TouchableOpacity
                    style={styles.forgotPos}
                    onPress={() => this.toggleForgotPassword()}>
                    <Text style={styles.forgotText}>Forgot your password?</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {customStyleIndex === 1 && (
              <View style={styles.tabContent}>
                <View style={styles.inputBox}>
                  <TextInput style={styles.inputText}
                    placeholder="First name"
                  />
                </View>
                <View style={styles.inputBox}>
                  <TextInput style={styles.inputText}
                    placeholder="Last name"
                  />
                </View>
                <View style={styles.inputBox}>
                  <TextInput style={styles.inputText}
                    placeholder="Email"
                  />
                </View>
                <View style={styles.inputBox}>
                  <TextInput style={styles.inputText}
                    secureTextEntry={true}
                    placeholder="Password"
                  />
                </View>
                <TouchableOpacity style={styles.logInSignUpBtn}>
                  <View>
                    <Text style={styles.btnText}>Create an account</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          </View>

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
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    height: 70
  },
  test: {
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
    marginBottom: 40
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
