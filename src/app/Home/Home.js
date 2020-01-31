import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';

import DrawerButton from 'app/Components/DrawerButton.js';
import SearchBar from 'app/Components/SearchBar.js';
import { createStackNavigator } from 'react-navigation-stack';

export default class Home extends Component {
  // toggleDrawer is a static function that controls the drawer menu button
  toggleDrawer = () => {
    this.props.navigation.toggleDrawer();
  };

  // toggleSearch is a static function that navigates to the search page
  toggleSearch = () => {
    this.props.navigation.navigate('Ninth');
  }


  render () {
    return (
      // Drawer menu button
      <View>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <DrawerButton />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.toggleSearch()}>
          <SearchBar />
        </TouchableOpacity>

      </View>
        

    );
  }
}

const styles = StyleSheet.create({
  // Not using this style so might need to delete later on
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});

