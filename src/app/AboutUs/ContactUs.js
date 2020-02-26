import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, SafeAreaView, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
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
                      <Text style={styles.title}>Contact Us</Text>
                    </View>
                    <Text style={styles.text}>Phone: 400-600-2866</Text>
                    <Text style={styles.text}>Email: sylvia@sylviaplus.com</Text>
                    <Text style={styles.orText}>Or</Text>
                    <Text style={styles.text}>Leave us a direct message here:</Text>

                    {/* First name input box */}
                    <View style={styles.inputBox}>
                      <TextInput style={styles.inputText}
                        placeholder="Name"
                      />
                    </View>
                    {/* Last name input box */}
                    <View style={styles.inputBox}>
                      <TextInput style={styles.inputText}
                        placeholder="Email"
                      />
                    </View>
                    {/* Email input box */}
                    <View style={styles.inputBox}>
                      <TextInput style={styles.inputText}
                        placeholder="Phone #"
                      />
                    </View>
                    {/* Password input box */}
                    <View style={styles.messInputBox}>
                      <TextInput style={styles.messInputText}
                        multiline={true}
                        placeholder="Message"
                      />
                    </View>
                    {/* Sign up button */}
                    <TouchableOpacity style={styles.sendBtn}>
                      <View>
                        <Text style={styles.btnText}>Send</Text>
                      </View>
                    </TouchableOpacity>
                    <Text style={styles.TYMessage}>
                      Thank you for taking the time to send us a response.
                      We'll get back to you as soon as we can!
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
    marginVertical: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#636363',
    textDecorationLine: 'underline'
  },
  text: {
    fontSize: 20,
    color: '#636363',
    marginVertical: 3
  },
  orText: {
    fontSize: 20,
    color: '#636363',
    marginVertical: 25,
    alignSelf: 'center'
  },
  inputBox: {
    height: 49,
    borderColor: '#CAC1C1',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 7,
    marginVertical: 5,
  },
  messInputBox: {
    height: 200,
    borderColor: '#CAC1C1',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 7,
    marginVertical: 5
  },
  inputText: {
    marginHorizontal: 10,
    height: 49
  },
  messInputText: {
    marginHorizontal: 10,
    height: 200,
    top: 10
  },
  sendBtn: {
    backgroundColor: '#D2C097',
    marginVertical: 25,
    marginHorizontal: 30,
    paddingVertical: 10,
    alignItems: 'center'
  },
  btnText: {
    fontSize: 18,
    color: 'white'
  },
  TYMessage: {
    fontSize: 20,
    color: '#636363',
    marginBottom: 50
  }
});
