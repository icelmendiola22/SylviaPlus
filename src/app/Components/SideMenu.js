import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

class SideMenu extends Component {
  constructor() {
    super();
    this.options = {
      home: {
        title: 'Home',
        navigationPath: 'First'
      },
      myAccount: {
        title: 'My Account',
        navigationPath: 'Second'
      },
      sysAndPref: {
        title: 'Settings & Preferences',
        navigationPath: 'Third'
      },
      aboutUs: {
        title: 'About Us',
        navigationPath: 'Fifth'
      },
      contactUs : {
        title: 'Contact Us',
        navigationPath: 'Sixth'
      },
      faq : {
        title: 'FAQ',
        navigationPath: 'Seventh'
      },
      LoginSignup: {
        title: 'Log In  |  Sign Up',
        navigationPath: 'Eigth'
      }
    };
  }

  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View>

            <TouchableOpacity onPress={this.navigateToScreen(this.options.home.navigationPath)}>
              <Text style={styles.title}>
                {this.options.home.title}
              </Text>
            </TouchableOpacity>

            <Text style={styles.section}>
              Profile
            </Text>
            <TouchableOpacity onPress={this.navigateToScreen(this.options.myAccount.navigationPath)}>
              <Text style={styles.title}>
                {this.options.myAccount.title}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigateToScreen(this.options.sysAndPref.navigationPath)}>
              <Text style={styles.title}>
                {this.options.sysAndPref.title}
              </Text>
            </TouchableOpacity>

            <Text style={styles.section}>
              Collections
            </Text>
            <TouchableOpacity>
              <Text style={styles.title}>
                Lamps
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.title}>
                Side Tables
              </Text>
            </TouchableOpacity>

            <Text style={styles.section}>
              Get To Know Us
            </Text>
            <TouchableOpacity onPress={this.navigateToScreen(this.options.aboutUs.navigationPath)}>
              <Text style={styles.title}>
                {this.options.aboutUs.title}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigateToScreen(this.options.contactUs.navigationPath)}>
              <Text style={styles.title}>
                {this.options.contactUs.title}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigateToScreen(this.options.faq.navigationPath)}>
              <Text style={styles.title}>
                {this.options.faq.title}
              </Text>
            </TouchableOpacity>

            <Text style={styles.horizontalLine}>
              Testing
            </Text>
            <TouchableOpacity onPress={this.navigateToScreen(this.options.LoginSignup.navigationPath)}>
              <Text style={styles.title}>
                {this.options.LoginSignup.title}
              </Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>Put Social Media Links/Logos Here!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    paddingTop: 30,
    flex: 1
  },
  section: {
    paddingTop: 30,
    paddingHorizontal: 5,
    color: '#666666'
  },
  title: {
    paddingTop: 10,
    paddingHorizontal: 28,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#636363'
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey'
  },
  horizontalLine: {
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: 10,
    color: 'black',
    backgroundColor: 'black',
    height: 0.5
  }
});

export default SideMenu;
