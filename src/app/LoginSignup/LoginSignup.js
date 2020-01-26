import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import DrawerButton from 'app/Components/DrawerButton.js'

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

  render () {
    const { customStyleIndex } = this.state;

    return (
      // Drawer menu button
      <View>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <DrawerButton />
        </TouchableOpacity>
        <SegmentedControlTab
          values={['Log In', 'Sign Up']}
          selectedIndex={customStyleIndex}
          onTabPress={this.handleCustomIndexSelect}
          borderRadius={0}
          tabsContainerStyle={styles.tabsContainer}
          tabStyle={styles.tab}
          activeTabStyle={styles.activeTab}
          tabTextStyle={styles.tabText}
          activeTabTextStyle={styles.activeTabText}
        />

        {customStyleIndex === 0 && (
          <View style={styles.tabContent}>
            <TextInput
              style={styles.inputBox}
              placeholder="  Email"
            />
            <TextInput
              style={styles.inputBox}
              placeholder="  Password"
            />
            <View style={styles.signInButton}>
              <Button
                title="Sign In"
                color='white'
              />
            </View>
            <TouchableOpacity>
              <Text>
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {customStyleIndex === 1 && (
          <Text style={styles.tabContent}>Sign Up tab</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 10
  },
  tabsContainer: {
    marginTop: 56,
    marginHorizontal: 20,
    backgroundColor: '#F2F2F2'
  },
  tab: {
    backgroundColor: 'white',
    borderColor: 'transparent',
  },
  activeTab: {
    backgroundColor: 'white'
  },
  tabText: {
    fontSize: 20,
    marginVertical: 20,
    color: 'gray',
  },
  activeTabText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25
  },
  tabContent: {
    color: '#444444',
    backgroundColor: 'white',
    fontSize: 18,
    marginHorizontal: 20
  },
  inputBox: {
    height: 49,
    borderColor: '#CAC1C1',
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 7
  },
  signInButton: {
    backgroundColor: '#D2C097',
    marginVertical: 15,
    marginHorizontal: 20,
    paddingVertical: 4
  }
});
