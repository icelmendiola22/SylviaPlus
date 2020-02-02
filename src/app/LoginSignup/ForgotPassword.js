import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native';

import DrawerButton from 'app/Components/DrawerButton.js'
import SearchBar from 'app/Components/SearchBar.js'

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

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
            <DrawerButton />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.toggleSearch()}>
            <SearchBar />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={styles.tabContent}>
            <Text style={styles.Title}>Reset your</Text>
            <Text style={styles.Title}>Password</Text>
            <Text style={styles.caption}>
              We will send you an email to reset your password.
            </Text>
            <View style={styles.inputBox}>
              <TextInput style={styles.inputText}
                placeholder="Email"
              />
            </View>
            <TouchableOpacity style={styles.submitBtn}>
              <View>
                <Text style={styles.btnText}>Create an account</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.cancelBtn}>
              <TouchableOpacity
                style={styles.cancelPos}
                onPress={() => this.toggleLogInSignUp()}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
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
  tabContent: {
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
